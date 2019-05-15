import { Component, OnInit, Input } from '@angular/core';
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

  saveCandidateId() {

  }

  public filterCandidates() {
    console.log('Test Filter Info: ', {
      'textFilterType': this.textFilterType,
      'textFilter': this.textFilter
    });
    let temp: Candidate[] = [];
    this.listOfCandidates.forEach(
      (c) => {
        if (c.first.toLowerCase().includes(this.textFilter.toLowerCase()))
          temp.push(c);
      }
    );

    console.log(temp);
    this.listOfCandidates = temp;
  }

}
