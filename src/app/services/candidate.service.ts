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
  readonly APP_PATH: string = '';

  constructor(private http: HttpClient) { }

  public createCandidate(candidate: Candidate){
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }).set('content-type', 'application/json');
    return this.http.post<any>('http://localhost:7000/candidateservice/candidates', JSON.stringify(candidate), {headers});
  }

  public loadAllCandidates(){
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }).set('content-type', 'application/json');
    return this.http.get<Candidate[]>('http://localhost:7000/candidateservice/candidates/', {headers});
  }
}
