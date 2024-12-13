import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomService } from './services/room.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RouterModule, RoomListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.less'
})
export class RoomsComponent {
  roomService = inject(RoomService);
}
