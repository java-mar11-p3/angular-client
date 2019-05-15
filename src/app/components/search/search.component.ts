import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ScreeningListComponent } from '../screening-list/screening-list.component';
import { MatButtonToggleGroup } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchForm') searchForm: NgForm;
  @ViewChild('filterGroup') filterGroup: MatButtonToggleGroup;
  @ViewChild(ScreeningListComponent) candidatesComponent: ScreeningListComponent;

  public textFilter: string = '';
  public selectedUser: User;

  constructor() { }

  ngOnInit() {

  }

  public onSubmit() {
    console.log(this.filterGroup.value);
    this.candidatesComponent.filterCandidates();
    this.textFilter = '';
  }
}
