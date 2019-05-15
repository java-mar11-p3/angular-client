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

  public screenings: Screening[];
  public candidateNames: string[];
  public testScreenings: Screening[] = [
    { screeningNotes: 'Jim' },
    { screeningNotes: 'Bill' },
    { screeningNotes: 'Ted' },
    { screeningNotes: 'Bob' }
  ];
  public user: User = new User();

  constructor(private service: GatewayService) {
    this.user = JSON.parse(localStorage.getItem('USER')) || { user_id: 123 };
    console.log(this.user);
  }

  ngOnInit() {
    this.service.loadScreeningsById(this.user.user_id).subscribe(
      data => this.screenings = data,
      err => console.error(err),
      () => {
        console.log('Screenings: ', this.screenings);
        if (this.screenings.length < 1) {
          this.screenings[0] = {
            screeningNotes: 'No Screenings found.'
          }
          return;
        }
        console.log(this.screenings);
        // this.screenings.forEach(s => {
        //   this.service.getCandidateById(s.candidate_id).subscribe(
        //     data => this.candidateNames.push(data.first + ' ' + data.last),
        //     err => console.error(err),
        //     () => console.log(this.candidateNames)
        //   );
        // });
      }
    );
  }
}
