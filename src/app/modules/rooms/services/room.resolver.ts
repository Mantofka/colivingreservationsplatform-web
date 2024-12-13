import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { RoomService } from './room.service';
import { RoomResponseDto } from '../models/room.model';

export const RoomResolver: ResolveFn<RoomResponseDto> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  service: RoomService = inject(RoomService),
): Observable<RoomResponseDto> => {
  return service.getById(route.params?.['roomId']).pipe(
    catchError((e) => {
      return EMPTY;
    })
  );
}