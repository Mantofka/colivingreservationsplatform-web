import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestBaseService } from '../../../shared/services/rest-base.service';
import { environment } from '../../../../environments/environment';
import { TenantResponseDto, TenantUpdateDto } from '../models/tenant.model';

@Injectable({
  providedIn: 'root',
})
export class TenantService extends RestBaseService {
  constructor(http: HttpClient) {
    super(http);
  }

//   createRoom(room: RoomCreateDto): Observable<RoomResponseDto> {
//     return this.CreateAsync<any>(
//       room,
//       `${environment.api.roomApiUrl}`
//     );
//   }

  updateTenant(id: string, tenant: TenantUpdateDto): Observable<TenantResponseDto> {
    return this.UpdateAsync<any>(
        id,
        tenant,
      `${environment.api.tenantApiUrl}`
    );
  }

  deleteTenant(id: string) {
    return this.DeleteAsync<any>(
        id,
      `${environment.api.tenantApiUrl}`
    );
  }

  getList(): Observable<TenantResponseDto[]> {
    return this.GetAllAsync(
      `${environment.api.tenantApiUrl}`
    );
  }
  getListByRoom(colivingId: string, tenantId: string): Observable<TenantResponseDto[]> {
    return this.GetAllAsync(
      `${environment.api.colivingApiUrl}/${colivingId}/room/${tenantId}/tenants`
    );
  }
  getById(id: string): Observable<TenantResponseDto> {
    return this.GetByIdAsync<any>(
      id,
      `${environment.api.tenantApiUrl}`
    );
  }
  getCurrentUser(): Observable<TenantResponseDto> {
    return this.GetAllAsync<any>(
      `${environment.api.tenantApiUrl}/current`
    );
  }
}