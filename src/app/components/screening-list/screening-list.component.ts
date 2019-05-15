import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Screening } from 'src/app/models/screening';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-screening-list',
  templateUrl: 'screening-list.component.html',
  styleUrls: ['screening-list.component.css']
})
export class ScreeningListComponent implements OnInit {

  @Input() public textFilter: string;
  @Input() public textFilterType: string;

  @Output() public selectedUserChange: EventEmitter<User> = new EventEmitter<User>();

  public candidates: Screening[];
  public testCandidates: Screening[] = [
    { screeningNotes: 'Jim' },
    { screeningNotes: 'Bill' },
    { screeningNotes: 'Ted' },
    { screeningNotes: 'Bob' }
  ];

  constructor() { }

  ngOnInit() {
    this.candidates = this.testCandidates;
  }

  public filterCandidates() {
    console.log('Test Filter Info: ', {
      'textFilterType': this.textFilterType,
      'textFilter': this.textFilter
    });
    let temp: Screening[] = [];
    this.testCandidates.forEach(
      (c) => {
        if (c.screeningNotes.toLowerCase().includes(this.textFilter.toLowerCase()))
          temp.push(c);
      }
    );

    console.log(temp);
    this.candidates = temp;
  }


  public onSelect(user: User) {
    this.selectedUserChange.emit(user);
  }
}
