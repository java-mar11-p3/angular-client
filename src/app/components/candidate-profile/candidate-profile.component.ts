import { Component, OnInit } from '@angular/core';
import { Screening } from 'src/app/models/screening';
import { GatewayService } from 'src/app/services/gateway.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {
  candidateId : number;

  listOfScreenings: Screening[];
  constructor(private service: GatewayService, private router: Router) { }

  ngOnInit() {
    this.candidateId = JSON.parse(sessionStorage.getItem("candidateId"));
    this.service.loadScreeningsByCandidateId(this.candidateId).subscribe(
      data => {
        this.listOfScreenings = data
      },
      error => console.error(error)
    )
  }

}
