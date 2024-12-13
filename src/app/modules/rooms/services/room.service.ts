import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestBaseService } from '../../../shared/services/rest-base.service';
import { environment } from '../../../../environments/environment';
import { RoomCreateDto, RoomResponseDto, RoomUpdateDto } from '../models/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService extends RestBaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  createRoom(room: RoomCreateDto): Observable<RoomResponseDto> {
    return this.CreateAsync<any>(
      room,
      `${environment.api.roomApiUrl}`
    );
  }

  updateRoom(id: string, coliving: RoomUpdateDto): Observable<RoomResponseDto> {
    return this.UpdateAsync<any>(
        id,
        coliving,
      `${environment.api.roomApiUrl}`
    );
  }

  deleteRoomById(id: string) {
    return this.DeleteAsync<any>(
        id,
      `${environment.api.roomApiUrl}`
    );
  }

  getList(colivingId: string): Observable<RoomResponseDto[]> {
    return this.GetByIdAsync<any>(
      colivingId,
      `${environment.api.roomApiUrl}/coliving`
    );
  }
  getById(id: string): Observable<RoomResponseDto> {
    return this.GetByIdAsync<any>(
      id,
      `${environment.api.roomApiUrl}`
    );
  }
  assignTenant(roomId: string): Observable<RoomResponseDto> {
    return this.CreateAsync<any>(
      {roomId},
      `${environment.api.roomApiUrl}/assignTenant`
    );
  }
}