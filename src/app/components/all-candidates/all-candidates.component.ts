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

  public listOfCandidates: Candidate[] = [];
  private backUp: Candidate[] = [];
  @Input() public textFilter: string;
  @Input() public textFilterType: string;

  // @ViewChild('candidateId') canId: any;

  constructor(private service: GatewayService, private router: Router) { }

  ngOnInit() {
    this.service.loadAllCandidates().subscribe(
      data => {
        this.backUp = data;
      },
      error => console.error(error)
    )

  }

  saveCandidateId(candidate) {

    sessionStorage.setItem("candidateId", candidate.candidate_id)
    sessionStorage.setItem("candidateFirstName", candidate.firstName)
    sessionStorage.setItem("candidateLastName", candidate.lastName)
    this.router.navigateByUrl('createScreening');
    this.changePage();
  }

  viewCandidate(candidate) {
    sessionStorage.setItem("candidateId", candidate.candidate_id)
    sessionStorage.setItem("candidateFirstName", candidate.firstName)
    sessionStorage.setItem("candidateLastName", candidate.lastName)
    this.router.navigateByUrl('candidateProfile');
  }

  public filterCandidates() {
    let temp: Candidate[] = [];
    if (this.textFilter === '' || this.textFilter === null || this.textFilter === undefined) {
      this.changePage(0);
    }

    this.backUp.forEach(
      (c) => {
        if (this.textFilterType === 'first') {
          if (c.firstName.toLowerCase().includes(this.textFilter.toLowerCase()))
            temp.push(c);
        }
        if (this.textFilterType === 'last') {
          if (c.lastName.toLowerCase().includes(this.textFilter.toLowerCase()))
            temp.push(c);
        }
        if (this.textFilterType === 'both') {
          let name: string = c.firstName + c.lastName;
          if (name.toLowerCase().includes(this.textFilter.toLowerCase()))
            temp.push(c);
        }
      }
    );

    this.listOfCandidates = temp;
  }

  public changePage(pageIndex?: number) {
    this.service.loadAllCandidates(pageIndex || 0).subscribe(
      data => this.listOfCandidates = data['content'] || data,
      error => console.error(error)
    )
  }

}
