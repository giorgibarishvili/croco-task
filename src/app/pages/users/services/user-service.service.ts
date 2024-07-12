import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS } from '../../../config/urls';
import { Observable } from 'rxjs';
import { UserModel } from '../users.model';

@Injectable()
export class UserServiceService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(URLS.USERS);
  }
}
