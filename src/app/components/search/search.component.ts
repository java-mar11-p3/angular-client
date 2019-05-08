import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public search: string = '';

  constructor() { }

  ngOnInit() {
  }


  public onSubmit() {
    console.log(this.search);
    this.search = '';
  }
}
