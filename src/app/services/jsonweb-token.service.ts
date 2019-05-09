import { Injectable } from '@angular/core';
import * as jwt from 'jsonwebtoken';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class JSONWebTokenService {

  readonly TOKEN_KEY: string = 'This is the token key';

  constructor() { }

  public verifyUserToken(token: string): Object {
    return jwt.verify(token, this.TOKEN_KEY);
  }

  public assignUserToken(user: User): string {
    return jwt.sign(user, this.TOKEN_KEY);
  }

}
