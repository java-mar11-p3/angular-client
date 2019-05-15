import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { Candidate } from 'src/app/models/candidate';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-candidates',
  templateUrl: './all-candidates.component.html',
  styleUrls: ['./all-candidates.component.css']
})
export class AllCandidatesComponent implements OnInit {

  listOfCandidates: Candidate[];
  @Input() public textFilter: string;
  @Input() public textFilterType: string;


  constructor(private service: GatewayService, private router: Router) { }

  ngOnInit() {
    this.changePage();
  }

  saveCandidateId() {
    var inputValue = (<HTMLInputElement>document.getElementById("candidate-id")).value;
    sessionStorage.setItem('candidateId', inputValue);
    this.router.navigateByUrl("createScreening");
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
