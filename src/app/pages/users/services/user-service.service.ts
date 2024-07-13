import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS } from '../../../config/urls';
import { Observable } from 'rxjs';
import { UserModel } from '../users.model';

@Injectable()
export class UserServiceService {
  constructor(private http: HttpClient) {}

  public getUsers(filter: any): Observable<UserModel[]> {
    let params = new HttpParams();

    if(filter?.email) {
      params = params.append('email', filter.email)
    }

    if(filter?.name) {
      params = params.append('name', filter.name)
    }

    return this.http.get<UserModel[]>(URLS.USERS, { params });
  }
}
