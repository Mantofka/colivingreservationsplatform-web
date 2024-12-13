import { Component, inject } from '@angular/core';
import { TenantService } from '../services/tenant.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { TenantListCardComponent } from '../tenant-list-card/tenant-list-card.component';

@Component({
  selector: 'app-tenant-list',
  standalone: true,
  imports: [ButtonModule, TenantListCardComponent],
  templateUrl: './tenant-list.component.html',
  styleUrl: './tenant-list.component.less'
})
export class TenantListComponent {
  private tenantService = inject(TenantService);
  private activatedRoute = inject(ActivatedRoute);
  private route = inject(Router);

  colivingId: string | null = this.activatedRoute.snapshot.paramMap.get('colivingId') ? this.activatedRoute.snapshot.paramMap.get('colivingId') : null;
  roomId: string | null = this.activatedRoute.snapshot.paramMap.get('roomId') ? this.activatedRoute.snapshot.paramMap.get('roomId') : null;

  tenants = toSignal(this.roomId && this.colivingId ? this.tenantService.getListByRoom(this.colivingId, this.roomId) : EMPTY);

  allTenants = toSignal(this.tenantService.getList() ?? EMPTY);

  onTenantClick = (id: string) => {
    this.route.navigate(['/tenant', id])
  }
}
