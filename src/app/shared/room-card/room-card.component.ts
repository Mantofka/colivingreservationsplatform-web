import { Component, EventEmitter, input, Output } from '@angular/core';
import { RoomResponseDto } from '../../modules/rooms/models/room.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.less'
})
export class RoomCardComponent {
  room = input.required<RoomResponseDto>();
  permitDeleteAction = input(false);
  
  @Output()
  onClick: EventEmitter<RoomResponseDto> = new EventEmitter<RoomResponseDto>();

  @Output()
  onDeleteClick: EventEmitter<RoomResponseDto> = new EventEmitter<RoomResponseDto>();

  onRoomClick() {
    this.onClick.emit(this.room());
  }

  onRoomDeleteClick(event: Event){
    event.stopPropagation();
    this.onDeleteClick.emit(this.room());
  }
}
