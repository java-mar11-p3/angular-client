import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(
      data => { this.loggedIn = this.auth.isLoggedIn(); },
      err => console.error('Router Error in NavBar Component: ', err)
    );
  }

  public Logout() {
    this.auth.logout();
    this.router.navigateByUrl('login');
  }

  public Home() {
    this.router.navigateByUrl('home');
  }
}
