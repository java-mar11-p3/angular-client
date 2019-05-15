import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  //Path to api
  private readonly APP_PATH: string = 'http://localhost:7000/candidateservice/candidates';

  private readonly options = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public createCandidate(candidate: Candidate) {
    return this.http.post<any>(this.APP_PATH, JSON.stringify(candidate), this.options);
  }

  public loadAllCandidates() {
    return this.http.get<Candidate[]>(this.APP_PATH, this.options);
  }
}
