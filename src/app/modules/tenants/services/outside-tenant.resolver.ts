import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { TenantResponseDto } from '../models/tenant.model';
import { TenantService } from './tenant.service';

export const OutsideTenantResolver: ResolveFn<TenantResponseDto> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  service: TenantService = inject(TenantService),
): Observable<TenantResponseDto> => {
  return service.getById(route.params?.['tenantId']).pipe(
    catchError((e) => {
      return EMPTY;
    })
  );
}