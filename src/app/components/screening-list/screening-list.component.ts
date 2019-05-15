import { Component, OnInit } from '@angular/core';
import { Screening } from 'src/app/models/screening';
import { GatewayService } from 'src/app/services/gateway.service';

@Component({
  selector: 'app-screening-list',
  templateUrl: 'screening-list.component.html',
  styleUrls: ['screening-list.component.css']
})
export class ScreeningListComponent implements OnInit {

  public screenings: Screening[];
  public testScreenings: Screening[] = [
    { screeningNotes: 'Jim' },
    { screeningNotes: 'Bill' },
    { screeningNotes: 'Ted' },
    { screeningNotes: 'Bob' }
  ];

  constructor(private service: GatewayService) { }

  ngOnInit() {
    this.screenings = this.testScreenings;
  }

  public filterCandidates() {

  }

}
