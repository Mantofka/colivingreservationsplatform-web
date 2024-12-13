import { Component, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColivingService } from '../services/coliving.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BaseInputComponent } from '../../../shared/base-input/base-input.component';
import { ColivingResponseDto } from '../models/coliving.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { FormContainerWrapperComponent } from "../../../shared/form-container-wrapper/form-container-wrapper.component";
import { RoomListComponent } from '../../rooms/room-list/room-list.component';
import { MessageSeverity } from '../../../shared/models/message';
import { RoleEnum } from '../../../shared/models/roles';
import { AutoComplete, AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../../../services/auth.service';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-create-update-coliving',
  standalone: true,
  imports: [BaseInputComponent, FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule, CommonModule, FormContainerWrapperComponent, FormContainerWrapperComponent, RoomListComponent, SelectModule],
  templateUrl: './create-update-coliving.component.html',
  styleUrl: './create-update-coliving.component.less'
})
export class CreateUpdateColivingComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  private colivingService = inject(ColivingService);
  private activatedRoute = inject(ActivatedRoute);
  private messageService = inject(MessageService);
  private authService = inject(AuthService);
  form!: FormGroup;

  role: string | undefined;
  roleType = RoleEnum;

  ownersList = toSignal(this.authService.getList(), {initialValue: []})

  colivingObject?: ColivingResponseDto = this.activatedRoute.snapshot.data["coliving"];

  constructor() { 
    this.activatedRoute.parent?.data.subscribe((data) => {
      this.role = data['role'];
    });
    this.form = this.fb.group({
      id: [{value: this.colivingObject?.id || null, disabled: true}],
      name: [{value: this.colivingObject?.name || '', disabled: true}],
      address: [this.colivingObject?.address || ''],
      description: [this.colivingObject?.description || ''],
      email: [this.colivingObject?.email || ''],
      userId: [this.colivingObject?.userId || null],
    });
    effect(() => {
      console.log(this.ownersList())
    })
  }

  filterCountry(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;
    console.log(event)
    // for (let i = 0; i < (this.countries as any[]).length; i++) {
    //     let country = (this.countries as any[])[i];
    //     if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
    //         filtered.push(country);
    //     }
    // }

    // this.filteredCountries = filtered;
}

  onSubmit(){
    const form = this.form.getRawValue();
    if(this.colivingObject?.id){
      this.colivingService.updateColiving(this.colivingObject.id, form).subscribe({
        next: () => {
          this.routeAfterAction();

          this.messageService.add({severity: MessageSeverity.SUCCESS, summary:'Success', detail: 'Coliving updated successfully'});
        },
        error: () => {
          this.messageService.add({severity: MessageSeverity.ERROR, summary:'Error', detail: 'An error occurred while updating the coliving'});
        }
      });
    } else {
      this.colivingService.createColiving(form).subscribe({
        next: () => {
          this.routeAfterAction();
          this.messageService.add({severity: MessageSeverity.SUCCESS, summary:'Success', detail: 'Coliving created successfully'});
        },
        error: () => {
          this.messageService.add({severity:MessageSeverity.ERROR, summary:'Error', detail: 'An error occurred while creating the coliving'});
        }
      });
    }
  }

  routeAfterAction(){
    if(this.role === this.roleType.ColivingOwner){
      this.router.navigate(['/coliving', 'dashboard']);
    }
    else if(this.role === this.roleType.Administrator) {
      this.router.navigate(['/administrator', 'dashboard']);
    }
  }
}


