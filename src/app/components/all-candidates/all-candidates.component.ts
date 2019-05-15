import { Component, OnInit, Input, ViewChild } from '@angular/core';
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

  listOfCandidates: Candidate[];
  @Input() public textFilter: string;
  @Input() public textFilterType: string;

  // @ViewChild('candidateId') canId: any;

  constructor(private service: GatewayService, private router: Router) { }

  ngOnInit() {
    this.service.loadAllCandidates().subscribe(
      data => {
        this.listOfCandidates = data['content'];
        console.log(data)
      },
      error => console.error(error)
    )
    
  }

  saveCandidateId(candidate) {
    
    sessionStorage.setItem("candidateId", candidate.candidate_id)
    this.router.navigateByUrl('createScreening');
    this.changePage();
  }

  viewCandidate(candidate) {
    sessionStorage.setItem("candidateId", candidate.candidate_id)
    this.router.navigateByUrl('candidateProfile');
  }

  public filterCandidates() {
    let temp: Candidate[] = [];
    this.listOfCandidates.forEach(
      (c) => {
        if (c.first.toLowerCase().includes(this.textFilter.toLowerCase()))
          temp.push(c);
      }
    );

    this.listOfCandidates = temp;
  }

  public changePage(pageIndex?: number) {
    this.service.loadAllCandidates(pageIndex || 0).subscribe(
      data => this.listOfCandidates = data['content'],
      error => console.error(error)
    )
  }

}
