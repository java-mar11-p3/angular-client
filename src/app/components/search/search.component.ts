import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatButtonToggleGroup, MatPaginator } from '@angular/material';
import { User } from 'src/app/models/user';
import { AllCandidatesComponent } from '../all-candidates/all-candidates.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchForm') searchForm: NgForm;
  @ViewChild('filterGroup') filterGroup: MatButtonToggleGroup;
  @ViewChild(AllCandidatesComponent) candidatesComponent: AllCandidatesComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public textFilter: string = '';
  public selectedUser: User;

  constructor() { }

  ngOnInit() {
    this.candidatesComponent.changePage(0);
    this.paginator.page.subscribe(
      data => this.candidatesComponent.changePage(data['pageIndex']),
      err => console.error(err)
    );
  }

  public onSubmit() {
    this.candidatesComponent.filterCandidates();
    this.textFilter = '';
  }
}
