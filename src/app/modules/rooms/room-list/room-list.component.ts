import { Component, inject, ViewChild } from '@angular/core';
import { RoomService } from '../services/room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { EMPTY } from 'rxjs';
import { RoomCardComponent } from '../../../shared/room-card/room-card.component';
import { MessageService } from 'primeng/api';
import { RoomDeleteModalComponent } from '../room-delete-modal/room-delete-modal.component';
import { ButtonModule } from 'primeng/button';
import { RoleEnum } from '../../../shared/models/roles';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [RoomCardComponent, RoomDeleteModalComponent, ButtonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.less'
})
export class RoomListComponent {
  roomService = inject(RoomService);
  authService = inject(AuthService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  messageService = inject(MessageService);
  @ViewChild(RoomDeleteModalComponent) private deleteModal!: RoomDeleteModalComponent;
  colivingId: string | null = this.activatedRoute.snapshot.paramMap.get('colivingId') ? this.activatedRoute.snapshot.paramMap.get('colivingId') : null;
  role = this.authService.getUserRole() as RoleEnum;
  roleType = RoleEnum;
  
  rooms = toSignal(this.colivingId ? this.roomService.getList(this.colivingId) : EMPTY);

  onRoomClick(id: string) {
    this.router.navigate(['/coliving', 'view', this.colivingId, 'rooms', 'edit', id]);
  }
  onRoomCreateClick() {
    this.router.navigate(['/coliving', 'view', this.colivingId, 'rooms', 'create']);
  }

  openDeleteColivingModal(id: string) {
    this.deleteModal?.showDialog(id);
  }

  onRoomDeleteClick() {
    this.roomService.deleteRoomById(this.deleteModal.selectedId!).subscribe({
      next: () => {
        this.messageService.add({severity:'success', summary:'Success', detail: 'Coliving deleted successfully'});
        this.deleteModal?.hideDialog();
      },
      error: () => {
        this.messageService.add({severity:'error', summary:'Error', detail: 'An error occurred while deleting the coliving'});
      }
    });
  }

  get hasRightToDelete(){
    const allowedRoles = [RoleEnum.ColivingOwner, RoleEnum.Administrator];
    return allowedRoles.includes(this.role);
  }
}
