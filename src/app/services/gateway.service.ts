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
  public login(user: User): Observable<Object> {
    return this.userService.userLogin(user);
  }

  /**
   * Sends a Candidate Object to back end to be inserted into the DB
   * @param candidate A Candidate obj to be inserted into DB
   */
  public createCandidate(candidate: Candidate): Observable<any> {
    return this.candidateService.createCandidate(candidate);
  }

  /**
   * Loads all known Candidates from DB
   * @param page Optional page number index for pagination
   */
  public loadAllCandidates(page?: number): Observable<Candidate[]> {
    if (page) {
      return this.candidateService.loadAllCandidatesByPageNum(page);
    }
    return this.candidateService.loadAllCandidates();

  }

  /**
   * Returns the specific Candidate information based on ID number
   * @param id Candidate Id Number
   */
  public getCandidateById(id: number): Observable<Candidate> {
    return this.candidateService.getCandidateById(id);
  }

  /**
   * Sends a Screening Object to back end to be inserted into the DB
   * @param screening A new Screening obj to be inserted into DB
   */
  public createScreening(screening: Screening): Observable<any> {
    return this.screeningService.createScreening(screening);
  }

  //**Loads all known Screenings in DB */
  public loadAllScreenings(): Observable<Screening[]> {
    return this.screeningService.getAllScreenings();
  }

  /**
   * Loads all Screensings related to a specific User ID
   * @param id ID number of current User
   */
  public loadScreeningsById(id: number): Observable<Screening[]> {
    return this.screeningService.getScreeningsById(id);
  }

  public loadScreeningsByCandidateId(candidateId): Observable<any>{
    return this.screeningService.getScreeningsByCandidateId(candidateId);
  }

  public updateScreening(screening: Screening): Observable<any> {
    return this.screeningService.updateScreening(screening);
  }
  public loadAScreening(): Observable<any> {
    return this.screeningService.getAScreening();
  }
}
