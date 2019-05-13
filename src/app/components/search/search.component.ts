import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { CandidatesComponent } from '../candidates/candidates.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchForm') searchForm: NgForm;
  @ViewChild(CandidatesComponent) candidatesComponent: CandidatesComponent;

  public textFilter: string = '';
  public selectedUser: User;

  constructor() { }

  ngOnInit() {

  }

  public onSubmit() {

    this.candidatesComponent.filterCandidates();
    this.textFilter = '';
  }
}
