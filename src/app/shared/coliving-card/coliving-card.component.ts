import { Component, EventEmitter, input, Output } from '@angular/core';
import { ColivingResponseDto } from '../../modules/coliving/models/coliving.model';
import { RoleEnum } from '../models/roles';

@Component({
  selector: 'app-coliving-card',
  standalone: true,
  imports: [],
  templateUrl: './coliving-card.component.html',
  styleUrl: './coliving-card.component.less'
})
export class ColivingCardComponent {
  coliving = input.required<ColivingResponseDto>();
  
  @Output()
  onClick: EventEmitter<ColivingResponseDto> = new EventEmitter<ColivingResponseDto>();

  @Output()
  onDeleteClick: EventEmitter<ColivingResponseDto> = new EventEmitter<ColivingResponseDto>();

  onColivingClick() {
    this.onClick.emit(this.coliving());
  }

  onColivingDeleteClick(event: Event){
    event.stopPropagation();
    this.onDeleteClick.emit(this.coliving());
  }

  get isTenant() {
    return localStorage.getItem('role') === RoleEnum.Tenant;
  }
}
