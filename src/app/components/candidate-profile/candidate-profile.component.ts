import { Component, OnInit } from '@angular/core';
import { Screening } from 'src/app/models/screening';
import { GatewayService } from 'src/app/services/gateway.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {
  candidateId : number;
  screening : Screening

  listOfScreenings: Screening[];
  constructor(private service: GatewayService, private router: Router, private _location: Location) { }

  ngOnInit() {
    this.candidateId = JSON.parse(sessionStorage.getItem("candidateId"));
    this.service.loadScreeningsByCandidateId(this.candidateId).subscribe(
      data => {
        this.listOfScreenings = data
      },
      error => console.error(error)
    )
  }

  updateScreening(screening){
  
    sessionStorage.setItem("screeningId", screening.id)
    sessionStorage.setItem("candidateId", screening.candidateId)
    this.router.navigateByUrl('updateScreening');

  }
  return(){
    this._location.back();
  }

}
