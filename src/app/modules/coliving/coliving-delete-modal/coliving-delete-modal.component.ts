import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-coliving-delete-modal',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './coliving-delete-modal.component.html',
  styleUrl: './coliving-delete-modal.component.less'
})
export class ColivingDeleteModalComponent {
  visible = false;
  selectedColivingId: string | null = null;

  @Output()
  onConfirmHandler: EventEmitter<void> = new EventEmitter<void>();

  showDialog(id: string) {
    this.visible = true;
    this.selectedColivingId = id;
  }

  hideDialog() {
    this.visible = false;
    this.selectedColivingId = null;
  }

  onConfirm() {
    this.onConfirmHandler.emit();
  }
}
