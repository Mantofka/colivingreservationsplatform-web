import { Component, inject } from '@angular/core';
import { ColivingService } from '../../coliving/services/coliving.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ColivingCardComponent } from '../../../shared/coliving-card/coliving-card.component';

@Component({
  selector: 'app-tenant-dashboard',
  standalone: true,
  imports: [ColivingCardComponent],
  templateUrl: './tenant-dashboard.component.html',
  styleUrl: './tenant-dashboard.component.less'
})
export class TenantDashboardComponent {
  colivingSerice = inject(ColivingService);
  router = inject(Router);
  
  colivings = toSignal(this.colivingSerice.getList())

  onColivingClick(coliving: any) {
    console.log(coliving)
    this.router.navigate(['tenant', 'coliving', coliving.id]);
  }
}
