import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestBaseService } from '../../../shared/services/rest-base.service';
import { environment } from '../../../../environments/environment';
import { ColivingCreateDto, ColivingResponseDto, ColivingUpdateDto } from '../models/coliving.model';

@Injectable({
  providedIn: 'root',
})
export class ColivingService extends RestBaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  createColiving(coliving: ColivingCreateDto): Observable<ColivingResponseDto> {
    return this.CreateAsync<any>(
        coliving,
      `${environment.api.colivingApiUrl}`
    );
  }

  updateColiving(id: string, coliving: ColivingUpdateDto): Observable<ColivingResponseDto> {
    return this.UpdateAsync<any>(
        id,
        coliving,
      `${environment.api.colivingApiUrl}`
    );
  }

  deleteColivingById(id: string) {
    return this.DeleteAsync<any>(
        id,
      `${environment.api.colivingApiUrl}`
    );
  }

  getList(): Observable<ColivingResponseDto[]> {
    return this.GetAllAsync<any>(
      `${environment.api.colivingApiUrl}`
    );
  }
  getOwnerColivings(): Observable<ColivingResponseDto[]> {
    return this.GetAllAsync<any>(
      `${environment.api.colivingApiUrl}/owner`
    );
  }
  getById(id: string): Observable<ColivingResponseDto> {
    return this.GetByIdAsync<any>(
      id,
      `${environment.api.colivingApiUrl}`
    );
  }
}