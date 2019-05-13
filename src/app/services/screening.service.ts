import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Screening } from '../models/screening';


@Injectable({
  providedIn: 'root'
})
export class ScreeningService {

  //Path to api
  readonly APP_PATH: string = '';

  constructor(private http: HttpClient) { }

  public createScreening(screening: Screening){
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }).set('content-type', 'application/json');
    return this.http.post<any>('http://localhost:7000/screeningservice/screenings', JSON.stringify(screening), {headers});
  }

  
}
