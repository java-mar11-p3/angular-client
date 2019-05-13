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
  readonly APP_PATH: string = 'http://localhost:7000/userservice';

  constructor(private http: HttpClient) { }

  public userLogin(user: User){
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }).set('content-type', 'application/json');
    return this.http.post<any>('http://localhost:7000/userservice/users/login', JSON.stringify(user), {headers});
  }
}
