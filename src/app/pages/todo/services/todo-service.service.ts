import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { URLS } from '../../../config/urls';

@Injectable()
export class TodoServiceService {
  constructor(private http: HttpClient) {}

  public getTodos(userId?: number): Observable<Todo[]> {
    let params = new HttpParams();

    if (userId) {
      params = params.append('userId', userId);
    }

    return this.http.get<Todo[]>(URLS.TODO, { params });
  }
}
