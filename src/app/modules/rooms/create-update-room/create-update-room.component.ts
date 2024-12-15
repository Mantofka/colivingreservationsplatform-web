import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomResponseDto } from '../models/room.model';
import { RoomService } from '../services/room.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BaseInputComponent } from '../../../shared/base-input/base-input.component';
import { FormContainerWrapperComponent } from '../../../shared/form-container-wrapper/form-container-wrapper.component';
import { TenantListComponent } from '../../tenants/room-tenant-list/tenant-list.component';
import { MessageService } from 'primeng/api';
import { MessageSeverity } from '../../../shared/models/message';

@Component({
  selector: 'app-create-update-room',
  standalone: true,
  imports: [BaseInputComponent, FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule, CommonModule, FormContainerWrapperComponent, TenantListComponent],
  templateUrl: './create-update-room.component.html',
  styleUrl: './create-update-room.component.less'
})
export class CreateUpdateRoomComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  private roomService = inject(RoomService);
  private activatedRoute = inject(ActivatedRoute);
  private messageService = inject(MessageService);
  form!: FormGroup;

  roomObject?: RoomResponseDto = this.activatedRoute.snapshot.data["room"];
  colivingId: string | null = this.activatedRoute.snapshot.paramMap.get('colivingId') ? this.activatedRoute.snapshot.paramMap.get('colivingId') : null;

  constructor() { 
    this.form = this.fb.group({
      id: [{value: this.roomObject?.id || null, disabled: true}],
      description: [{value: this.roomObject?.description || '', disabled: true}, [Validators.required]],
      floorNumber: [this.roomObject?.floorNumber || '', Validators.required],
      number: [this.roomObject?.number || '', Validators.required],
      price: [this.roomObject?.price || '', Validators.required],
      size: [this.roomObject?.size || '', Validators.required],
      colivingId: [this.colivingId]
    });
  }

  onSubmit(){
    this.form.markAllAsTouched();
    console.log(this.form)

    if(!this.form.valid) return;
    const form = this.form.getRawValue();
    if(this.roomObject?.id){
      this.roomService.updateRoom(this.roomObject.id, form).subscribe({
        next: () => {
          this.router.navigate(['/coliving', 'view', this.colivingId, 'rooms']);
          this.messageService.add({severity: MessageSeverity.SUCCESS, summary:'Success', detail: 'Room updated successfully'});
        },
        error: (err) => {
          this.messageService.add({severity: MessageSeverity.SUCCESS, summary:'Success', detail: 'Coliving updated successfully'});
        }
      });
    } else {
      this.roomService.createRoom(form).subscribe((res) => {
        this.router.navigate(['/coliving', 'view', this.colivingId, 'rooms']);
      });
    }
  }

  get descriptionControl(): FormControl {
    return this.form.get('description') as FormControl;
  }
  get floorNumberControl(): FormControl {
    return this.form.get('floorNumber') as FormControl;
  }
  get numberControl(): FormControl {
    return this.form.get('number') as FormControl;
  }
  get sizeControl(): FormControl {
    return this.form.get('size') as FormControl;
  }
  get priceControl(): FormControl {
    return this.form.get('price') as FormControl;
  }
}
