import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ColivingResponseDto } from '../models/coliving.model';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { RoomService } from '../../rooms/services/room.service';
import { RoomCardComponent } from '../../../shared/room-card/room-card.component';
import { MessageService } from 'primeng/api';
import { MessageSeverity } from '../../../shared/models/message';

@Component({
  selector: 'app-coliving-information',
  standalone: true,
  imports: [CommonModule, RoomCardComponent],
  templateUrl: './coliving-information.component.html',
  styleUrl: './coliving-information.component.less'
})
export class ColivingInformationComponent {
  activatedRoute = inject(ActivatedRoute);
  roomService = inject(RoomService);
  messageService = inject(MessageService);
  colivingObject?: ColivingResponseDto = this.activatedRoute.snapshot.data["coliving"];

  rooms = toSignal(this.roomService.getList(this.colivingObject?.id!));

  constructor() { 

  }

  assignTenant(room: any) {
    this.roomService.assignTenant(room.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: MessageSeverity.SUCCESS,
          summary: 'Success',
          detail: 'Tenant assigned successfully!'
        });
      },
      error: (err) => {
        const {error} = err.error;
        this.messageService.add({
          severity: MessageSeverity.ERROR,
          summary: 'Error',
          detail: error,
        });
      }
    });
  }
}
