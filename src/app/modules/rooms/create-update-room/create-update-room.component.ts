import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomResponseDto } from '../models/room.model';
import { RoomService } from '../services/room.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BaseInputComponent } from '../../../shared/base-input/base-input.component';
import { FormContainerWrapperComponent } from '../../../shared/form-container-wrapper/form-container-wrapper.component';
import { TenantListComponent } from '../../tenants/room-tenant-list/tenant-list.component';

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
  form!: FormGroup;

  roomObject?: RoomResponseDto = this.activatedRoute.snapshot.data["room"];
  colivingId: string | null = this.activatedRoute.snapshot.paramMap.get('colivingId') ? this.activatedRoute.snapshot.paramMap.get('colivingId') : null;

  constructor() { 
    this.form = this.fb.group({
      id: [{value: this.roomObject?.id || null, disabled: true}],
      description: [{value: this.roomObject?.description || '', disabled: true}],
      floorNumber: [this.roomObject?.floorNumber || ''],
      number: [this.roomObject?.number || ''],
      price: [this.roomObject?.price || ''],
      size: [this.roomObject?.size || ''],
      colivingId: [this.colivingId]
    });
  }

  onSubmit(){
    const form = this.form.getRawValue();
    if(this.roomObject?.id){
      this.roomService.updateRoom(this.roomObject.id, form).subscribe((res) => {
        this.router.navigate(['/coliving', 'view', this.colivingId, 'rooms']);
      });
    } else {
      this.roomService.createRoom(form).subscribe((res) => {
        this.router.navigate(['/coliving', 'view', this.colivingId, 'rooms']);
      });
    }
  }
}