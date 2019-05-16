import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: User = new User();
  firstName : string;
  lastName: string;

  constructor(private auth: AuthService, private route: Router, private title: Title) { }

  ngOnInit() {
    this.firstName = JSON.parse(localStorage.getItem("USER")).firstName
    this.lastName = JSON.parse(localStorage.getItem("USER")).lastName
    this.user = JSON.parse(localStorage.getItem('USER')) || new User(0, 'Default', 'McDefaultFace', 'default@test.com');
    this.title.setTitle('Screen Force - Home');
    if (!this.auth.isLoggedIn()) {
      this.route.navigateByUrl('login');
    }

    // this.searchComponent.candidatesComponent.selectedUserChange.subscribe(
    //   data => this.user = data || JSON.parse(localStorage.getItem('USER')) || new User(0, 'Default', 'McDefaultFace', 'default@test.com'),
    //   err => console.error(err)
    // );
  }


}
