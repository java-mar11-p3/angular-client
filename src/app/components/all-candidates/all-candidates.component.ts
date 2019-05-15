import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { Candidate } from 'src/app/models/candidate';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material';


@Component({
  selector: 'app-all-candidates',
  templateUrl: './all-candidates.component.html',
  styleUrls: ['./all-candidates.component.css']
})
export class AllCandidatesComponent implements OnInit {

  // @ViewChild('candidateId') canId: any;

  listOfCandidates: Candidate[];


  constructor(private service: GatewayService, private router: Router) { }

  ngOnInit() {
    this.service.loadAllCandidates().subscribe(
      data => {
        this.listOfCandidates = data;
        console.log(data)
      },
      error => {
        alert(error)
      }
    )
    
  }

  saveCandidateId(candidate: any) {
    console.log(candidate.candidate_id);
    sessionStorage.setItem("candidateId", null);
    this.router.navigateByUrl("createScreening");
  }

}
