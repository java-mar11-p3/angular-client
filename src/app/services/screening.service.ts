import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Screening } from '../models/screening';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScreeningService {

  //Path to api
  private readonly APP_PATH: string = 'http://localhost:7000/screeningservice/screenings';

  private readonly options = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public createScreening(screening: Screening): Observable<Object> {
    return this.http.post<any>(this.APP_PATH, JSON.stringify(screening), this.options);
  }

  public getAllScreenings(): Observable<Object> {
    return this.http.get(this.APP_PATH, this.options);
  }

  public getScreeningsById(id: number): Observable<Object> {
    return this.http.get(this.APP_PATH + '/' + id, this.options);
  }

}
