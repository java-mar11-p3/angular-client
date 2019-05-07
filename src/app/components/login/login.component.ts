import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User('', '');
  public submitted: boolean = false;
  public rememberMe: boolean = false;

  constructor() {

  }

  ngOnInit() {
  }

  // Add (ngSubmit)='onSubmit()' to Form in template if used
  /**Turns this.submitted to true */
  public onSubmit() { this.submitted = true; }

  /**Handles logic related to User Login*/
  public Login() {
    console.log(this.user);
    console.log('Remember? ', this.rememberMe);
  }

}
