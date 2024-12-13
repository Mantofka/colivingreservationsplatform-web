import { Component, inject, ViewChild } from '@angular/core';
import { ColivingService } from '../../coliving/services/coliving.service';
import { MessageService } from 'primeng/api';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ColivingDeleteModalComponent } from '../../coliving/coliving-delete-modal/coliving-delete-modal.component';
import { ColivingCardComponent } from '../../../shared/coliving-card/coliving-card.component';

@Component({
  selector: 'app-administrator-dashboard',
  standalone: true,
  imports: [ColivingCardComponent, ColivingDeleteModalComponent],
  templateUrl: './administrator-dashboard.component.html',
  styleUrl: './administrator-dashboard.component.less'
})
export class AdministratorDashboardComponent {
  colivingSerice = inject(ColivingService);
  messageService = inject(MessageService);
  router = inject(Router);
  
  colivings = toSignal(this.colivingSerice.getList())

  @ViewChild(ColivingDeleteModalComponent) private modalRef!: ColivingDeleteModalComponent;

  onColivingClick(coliving: any) {
    this.router.navigate(['/coliving', 'edit', coliving.id]);
  }

  openDeleteColivingModal(id: string) {
    this.modalRef?.showDialog(id);
  }

  onColivingDeleteClick() {
    this.colivingSerice.deleteColivingById(this.modalRef.selectedColivingId!).subscribe({
      next: () => {
        this.messageService.add({severity:'success', summary:'Success', detail: 'Coliving deleted successfully'});
        this.modalRef?.hideDialog();
      },
      error: () => {
        this.messageService.add({severity:'error', summary:'Error', detail: 'An error occurred while deleting the coliving'});
      }
    });
  }
  onColivingCreateClick() {
    this.router.navigate(['/coliving', 'create']);
  }
}