import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from './user.service';
import { Candidate } from '../models/candidate';
import { CandidateService } from './candidate.service';
import { Screening } from '../models/screening';
import { ScreeningService } from './screening.service';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  //Path to api
  readonly APP_PATH: string = '';

  constructor(private userService: UserService, private candidateService: CandidateService, private screeningService: ScreeningService) { }

  public login(user: User): Observable<any> {
    return this.userService.userLogin(user);
  }

  public createCandidate(candidate: Candidate): Observable<any> {
    return this.candidateService.createCandidate(candidate);
  }

  public loadAllCandidates(): Observable<any>{
    return this.candidateService.loadAllCandidates();

  }

  public createScreening(screening: Screening): Observable<any>{
    return this.screeningService.createScreening(screening);
  }
}
