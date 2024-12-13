import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-tenant-delete-modal',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './tenant-delete-modal.component.html',
  styleUrl: './tenant-delete-modal.component.less'
})
export class TenantDeleteModalComponent {
  visible = false;
  selectedId: string | null = null;

  @Output()
  onConfirmHandler: EventEmitter<void> = new EventEmitter<void>();

  showDialog(id: string) {
    this.visible = true;
    this.selectedId = id;
  }

  hideDialog() {
    this.visible = false;
    this.selectedId = null;
  }

  onConfirm() {
    this.onConfirmHandler.emit();
  }
}