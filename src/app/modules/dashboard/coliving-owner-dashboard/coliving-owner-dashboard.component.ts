import { Component, inject, ViewChild } from '@angular/core';
import { ColivingService } from '../../coliving/services/coliving.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ColivingDeleteModalComponent } from '../../coliving/coliving-delete-modal/coliving-delete-modal.component';
import { CommonModule } from '@angular/common';
import { ColivingCardComponent } from '../../../shared/coliving-card/coliving-card.component';

@Component({
  selector: 'app-coliving-owner-dashboard',
  standalone: true,
  imports: [CommonModule, ColivingDeleteModalComponent, ColivingCardComponent],
  templateUrl: './coliving-owner-dashboard.component.html',
  styleUrl: './coliving-owner-dashboard.component.less'
})
export class ColivingOwnerDashboardComponent {
  colivingSerice = inject(ColivingService);
  messageService = inject(MessageService);
  router = inject(Router);
  
  colivings = toSignal(this.colivingSerice.getOwnerColivings())

  @ViewChild(ColivingDeleteModalComponent) private modalRef!: ColivingDeleteModalComponent;

  onColivingClick(coliving: any) {
    this.router.navigate(['/coliving', 'coliving', 'edit', coliving.id]);
  }
  onColivingCreateClick() {
    this.router.navigate(['/ccoliving', 'coliving', 'create']);
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
}

