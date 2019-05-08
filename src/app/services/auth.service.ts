import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(email: string, password: string) {
    localStorage.setItem('TOKEN', 'temp_token');
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('TOKEN');
  }
}
