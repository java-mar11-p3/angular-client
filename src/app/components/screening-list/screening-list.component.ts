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

  public screenings: Screening[] = [];
  public candidateNames: string[] = [];

  public testScreenings: Screening[] = [
    { screeningNotes: 'Jim' },
    { screeningNotes: 'Bill' },
    { screeningNotes: 'Ted' },
    { screeningNotes: 'Bob' }
  ];
  public user: User = new User();

  constructor(private service: GatewayService) {
    this.user = JSON.parse(localStorage.getItem('USER'));
    console.log(this.user);
  }

  ngOnInit() {
    let temp: any;
    this.service.loadAllCandidates().subscribe(
      data => temp = data,
      err => console.error(err),
      () => {
        console.log("LoadAllCandidates Data: ", temp);
        this.service.loadScreeningsById(this.user.user_id).subscribe(
          data => {
            data.forEach(s => {
              if (s.candidateId != 0) { this.screenings.push(s); }
            });

          },
          err => console.error(err),
          () => {
            if (this.screenings.length < 1) {
              this.screenings[0] = {
                screeningNotes: 'No Screenings found.'
              }
              return;
            }
            console.log('Get All User Screenings: ', this.screenings);
          }
        );
      }
    );
  }
}
