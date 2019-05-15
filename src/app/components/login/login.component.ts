import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { GatewayService } from 'src/app/services/gateway.service';
import { Server } from 'net';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  public submitted: boolean = false;
  public rememberMe: boolean = false;

  constructor(private auth: AuthService, private router: Router, private service: GatewayService, private title: Title) {
    if (localStorage.getItem('USER_EMAIL')) {
      this.user.email = localStorage.getItem('USER_EMAIL');
      this.rememberMe = true;
    }
  }

  ngOnInit() {
    this.title.setTitle('Screen Force - Login');
  }

  // Add (ngSubmit)='onSubmit()' to Form in template if used
  /**Turns this.submitted to true */
  public onSubmit() { this.submitted = true; }

  /**Handles logic related to User Login*/
  public Login() {
    console.log("hello");
    this.service.login(this.user).subscribe(
      data => {
        if(data !== null && data.user_id > 0 )
        {

          localStorage.setItem("userId", data.user_id)
          localStorage.setItem("firstName", data.firstName)
          let userId = localStorage.getItem("userId");
          let firstName = localStorage.getItem("firstName");
          console.log("The user is " + firstName + " with id of " + userId);
          console.log(data);
          this.auth.login(this.user.email, this.user.password);
          this.router.navigateByUrl('home')
        }
        else {
          console.group("no user!");
          alert("Sorry. Invalid username or password")
        }

      }
    )
    //   data => console.log(data),
    //   err => console.log(err),
    //  () => console.log('Login Success')
    //  );
    

   

    localStorage.removeItem('USER_EMAIL');
    if (this.rememberMe) {
      localStorage.setItem('USER_EMAIL', this.user.email);
    }

    // this.auth.login(this.user.email, this.user.password);
    // this.router.navigateByUrl('home');

    // this.service.login(this.user).subscribe(
    //   data => console.log(data),
    //   err => console.log(err),
    //   () => console.log('Login Success')
    // );
  }

}
