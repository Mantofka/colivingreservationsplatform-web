import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root',
})
export class RestBaseService {
  readonly reqOptions = {};
  
  constructor(protected http: HttpClient) {}

  private getAuthToken(): string | undefined {
    return Cookies.get('jwt');
  }

  private getHeaders() {
    const token = this.getAuthToken();
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }
    return new HttpHeaders();
  }

  GetAllAsync<T>(path: string): Observable<T> {
    const headers = this.getHeaders();
    return this.http.get<T>(`${path}`, {headers});
  }

  GetFilteredAsync<T>(filter: any, path: string): Observable<T> {
    const headers = this.getHeaders();
    const queryString = Object.keys(filter || {})
      .map((key) => clearNullParams(key, filter[ key ]))
      .filter(Boolean)
      .join('&');
    return this.http.get<T>(`${path}?${queryString}`, { headers });
  }

  GetByIdAsync<T>(id: string, path: string): Observable<T> {
    const headers = this.getHeaders();
    return this.http.get<T>(`${path}/${id}`, { headers });
  }

  CreateAsync<T>(insertDTO: any, path: string): Observable<T> {
    const headers = this.getHeaders();
    return this.http.post<T>(`${path}`, insertDTO, { headers });
  }

  DeleteAsync<T>(id: string, path: string): Observable<T> {
    const headers = this.getHeaders();
    return this.http.delete<T>(`${path}/${id}`, { headers });
  }

  UpdateAsync<T>(id: string, updateDTO: any, path: string): Observable<T> {
    const headers = this.getHeaders();
    return this.http.put<T>(`${path}/${id}`, updateDTO, { headers });
  }
}

function clearNullParams(key: string, filterKey: string | string[]): string{
  if(Array.isArray(filterKey))
    return filterKey.map(param => filterKey == null || param === 'null' || param === '' ? '' : key + '=' + param)
    .join('&')
  else 
    return filterKey == null || filterKey === 'null' || filterKey === '' ? '' : key + '=' + filterKey;
}