import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Screening } from 'src/app/models/screening';
import { GatewayService } from 'src/app/services/gateway.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-screening',
  templateUrl: './update-screening.component.html',
  styleUrls: ['./update-screening.component.css']
})
export class UpdateScreeningComponent implements OnInit {
  public screening: Screening = new Screening();

  constructor(private _location: Location, private service: GatewayService, private router: Router) { }

  ngOnInit() {
    this.service.loadAScreening().subscribe(
      data => {
        this.screening = data
        console.log(data)
      },
      error => console.log(error)

    )

  }

  submit() {
    this.screening.userId = + JSON.parse(localStorage.getItem("USER")).user_id;
    console.log(this.screening.userId)
    this.screening.candidateId = + sessionStorage.getItem("candidateId");
    this.service.updateScreening(this.screening).subscribe(
      data => {
        if (data == null) {
          console.log("new screening created!")
          this.router.navigateByUrl('home')
        }
        else {
          alert("Sorry. Screening was not created!")
        }
      }
    )
  }

  return(){
    this._location.back();
  }
}
