import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { ColivingResponseDto } from '../models/coliving.model';
import { ColivingService } from './coliving.service';

export const ColivingResolver: ResolveFn<ColivingResponseDto> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  service: ColivingService = inject(ColivingService),
): Observable<ColivingResponseDto> => {
  return service.getById(route.params?.['colivingId']).pipe(
    catchError((e) => {
      return EMPTY;
    })
  );
}