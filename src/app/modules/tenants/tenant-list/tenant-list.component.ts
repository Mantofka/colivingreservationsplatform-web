import { Component, inject, ViewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { TenantService } from '../services/tenant.service';
import { TenantListCardComponent } from '../tenant-list-card/tenant-list-card.component';
import { TenantDeleteModalComponent } from '../tenant-delete-modal/tenant-delete-modal.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tenant-list',
  standalone: true,
  imports: [TenantListCardComponent, TenantDeleteModalComponent],
  templateUrl: './tenant-list.component.html',
  styleUrl: './tenant-list.component.less'
})
export class TenantListComponent {
  private tenantService = inject(TenantService);
  private messageService = inject(MessageService);
  private route = inject(Router);

  @ViewChild(TenantDeleteModalComponent) private modalRef!: TenantDeleteModalComponent;

  tenants = toSignal(this.tenantService.getList() ?? EMPTY);

  onTenantClick = (id: string) => {
    this.route.navigate(['/tenant', id])
  }

  openDeleteColivingModal(id: string) {
    this.modalRef?.showDialog(id);
  }

  onTenantDeleteClick() {
    this.tenantService.deleteTenant(this.modalRef.selectedId!).subscribe({
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
