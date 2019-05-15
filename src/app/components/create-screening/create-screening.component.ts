import { Component, OnInit } from '@angular/core';

import { Screening } from 'src/app/models/screening';
import { Title } from '@angular/platform-browser';
import { GatewayService } from 'src/app/services/gateway.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-screening',
  templateUrl: './create-screening.component.html',
  styleUrls: ['./create-screening.component.css']
})
export class CreateScreeningComponent implements OnInit {
  public screening: Screening = new Screening();
  firstName : string
  lastName : string


  constructor(private title: Title, private service: GatewayService, private router: Router) { }

  ngOnInit() {
    this.title.setTitle('Screen Force - New Screening')
    this.firstName = sessionStorage.getItem("candidateFirstName")
    this.lastName = sessionStorage.getItem("candidateLastName")

  }

  submit() {
    this.screening.userId = + JSON.parse(localStorage.getItem("USER")).user_id;
    console.log(this.screening.userId)
    this.screening.candidateId = + sessionStorage.getItem("candidateId");
    this.service.createScreening(this.screening).subscribe(
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
}
