import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Screening } from 'src/app/models/screening';
import { GatewayService } from 'src/app/services/gateway.service';

@Component({
  selector: 'app-update-screening',
  templateUrl: './update-screening.component.html',
  styleUrls: ['./update-screening.component.css']
})
export class UpdateScreeningComponent implements OnInit {
  public screening: Screening = new Screening();
  public message: Object = new Object();
  firstName: string;
  lastName: string;

  constructor(private _location: Location, private service: GatewayService, private router: Router) { }

  ngOnInit() {
    this.firstName = sessionStorage.getItem("candidateFirstName")
    this.lastName = sessionStorage.getItem("candidateLastName")
    this.service.loadAScreening().subscribe(
      data => {
        this.screening = data
        console.log(data)
      },
      error => console.log(error)

    )

  }

  submit() {
    if (this.screening.screeningScore < 0) {
      this.message = { error: 'Score cannot be negative.' };
      return;
    }
    else if (this.screening.screeningScore > 100) {
      this.message = { error: 'Score cannot be greater than 100' };
      return;
    }
    this.screening.userId = JSON.parse(localStorage.getItem("USER")).user_id;
    console.log(this.screening.userId)
    this.screening.candidateId = +sessionStorage.getItem("candidateId");
    this.service.updateScreening(this.screening).subscribe(
      data => {},
      err => console.error(err),
      () => {
        this.router.navigateByUrl('home');
      }
    )
  }

  return() {
    this._location.back();
  }
}
