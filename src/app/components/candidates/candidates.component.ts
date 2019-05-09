import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidate } from 'src/app/models/candidate';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  @Input() public textFilter: string;

  @Output() public selectedUserChange: EventEmitter<User> = new EventEmitter<User>();

  public candidates: Candidate[];
  public testCandidates: Candidate[] = [
    { first: 'Jim' },
    { first: 'Bill' },
    { first: 'Ted' },
    { first: 'Bob' }
  ];

  constructor() { }

  ngOnInit() {
    this.candidates = this.testCandidates;
  }

  public filterCandidates() {
    console.log(this.textFilter);
    let temp: Candidate[] = [];
    this.testCandidates.forEach(
      (c) => {
        if (c.first.toLowerCase().includes(this.textFilter.toLowerCase()))
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
