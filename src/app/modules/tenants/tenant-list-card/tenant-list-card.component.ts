import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import { TenantResponseDto } from '../models/tenant.model';
import { CommonModule } from '@angular/common';
import { TenantService } from '../services/tenant.service';
import { RoomService } from '../../rooms/services/room.service';

@Component({
  selector: 'app-tenant-list-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tenant-list-card.component.html',
  styleUrl: './tenant-list-card.component.less'
})
export class TenantListCardComponent {
  tenant = input<TenantResponseDto>();
  permitDeleteAction = input(false);
  roomService = inject(RoomService);
  
  @Output()
  onClick: EventEmitter<TenantResponseDto> = new EventEmitter<TenantResponseDto>();

  @Output()
  onDeleteClick: EventEmitter<TenantResponseDto> = new EventEmitter<TenantResponseDto>();

  onTenantClick() {
    this.onClick.emit(this.tenant());
  }

  onTenantDeleteClick(event: Event){
    event.stopPropagation();
    this.onDeleteClick.emit(this.tenant());
  }
}
