import { Component, OnInit } from '@angular/core';
import { Screening } from 'src/app/models/screening';
import { GatewayService } from 'src/app/services/gateway.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-screening-list',
  templateUrl: 'screening-list.component.html',
  styleUrls: ['screening-list.component.css']
})
export class ScreeningListComponent implements OnInit {

  public screenings: any;
  public testScreenings: Screening[] = [
    { screeningNotes: 'Jim' },
    { screeningNotes: 'Bill' },
    { screeningNotes: 'Ted' },
    { screeningNotes: 'Bob' }
  ];
  public user: User = new User();

  constructor(private service: GatewayService) {
    this.user = JSON.parse(localStorage.getItem('USER')) || { id: 123 };
  }

  ngOnInit() {
    this.service.loadScreeningsById(this.user.id).subscribe(
      data => this.screenings = data,
      err => console.error(err),
      () => {
        console.log(this.screenings);
      }
    );
  }
}
