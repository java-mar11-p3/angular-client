import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(user: User) {
    localStorage.setItem('USER', JSON.stringify(user));
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('USER') !== null;
  }

  public logout() {
    localStorage.removeItem('USER');
  }
}
