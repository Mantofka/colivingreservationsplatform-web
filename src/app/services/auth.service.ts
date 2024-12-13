import { Injectable } from "@angular/core";
import { RestBaseService } from "../shared/services/rest-base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserListItemResponseDto } from "../models/user-model";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService extends RestBaseService {
    constructor(http: HttpClient) {
      super(http);
    }
    getUserRole(): string {
      return localStorage.getItem('role') || 'unauthorized';
    }

    getList(): Observable<UserListItemResponseDto[]> {
      return this.GetAllAsync<any>(
        `${environment.api.authenticationApiUrl}/colivingOwners`
      );
    }

  }
  