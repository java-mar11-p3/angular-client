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

  constructor(private userService: UserService, private candidateService: CandidateService, private screeningService: ScreeningService) { }

  /**
   * Sends initial USer Login data to back-end to be verified.
   * @param user A stripped down user object containing only email and password
   */
  public login(user: User): Observable<any> {
    return this.userService.userLogin(user);
  }

  /**
   * Sends a Candidate Object to back end to be inserted into the DB
   * @param candidate A Candidate obj to be inserted into DB
   */
  public createCandidate(candidate: Candidate): Observable<any> {
    return this.candidateService.createCandidate(candidate);
  }

  /**Loads all known Candidates from DB */
  public loadAllCandidates(): Observable<any> {
    return this.candidateService.loadAllCandidates();

  }

  /**
   * Sends a Screening Object to back end to be inserted into the DB
   * @param screening A new Screening obj to be inserted into DB
   */
  public createScreening(screening: Screening): Observable<any> {
    return this.screeningService.createScreening(screening);
  }

  //**Loads all known Screenings in DB */
  public loadAllScreenings(): Observable<Object> {
    return this.screeningService.getAllScreenings();
  }

  /**
   * Loads all Screensings related to a specific User ID
   * @param id ID number of current User
   */
  public loadScreeningsById(id: number): Observable<Object> {
    return this.screeningService.getScreeningsById(id);
  }
}
