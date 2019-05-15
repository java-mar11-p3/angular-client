import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Screening } from 'src/app/models/screening';
import { User } from 'src/app/models/user';
import { ScreeningService } from 'src/app/services/screening.service';

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

  constructor(private service: ScreeningService) { }

  ngOnInit() {
    this.screenings = this.testScreenings;
    
  }

  public filterCandidates() {

  }

}
