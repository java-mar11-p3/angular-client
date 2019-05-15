import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Path to api
  private readonly APP_PATH: string = 'http://localhost:7000/userservice';

  private readonly options = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public userLogin(user: User): Observable<Object> {
    return this.http.post<Object>(this.APP_PATH + '/users/login', JSON.stringify(user), this.options);
  }
}
