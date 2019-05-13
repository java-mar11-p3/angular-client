import { Component, OnInit } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { Candidate } from 'src/app/models/candidate';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-candidates',
  templateUrl: './all-candidates.component.html',
  styleUrls: ['./all-candidates.component.css']
})
export class AllCandidatesComponent implements OnInit {
  listOfCandidates : Candidate[];


  constructor(private service: GatewayService, private router: Router ) { }

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

  saveCandidateId(){
    var inputValue = (<HTMLInputElement>document.getElementById("candidate-id")).value;
    sessionStorage.setItem('candidateId', inputValue);
    this.router.navigateByUrl("createScreening");
    
  
  }

}
