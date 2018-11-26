import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string = "Tom's Products";

  isLoggedIn: boolean;
  constructor(private auth: AuthService, private myRoute: Router) { }

userLoggedIn(): boolean {
  this.isLoggedIn = this.auth.isLoggedIn();
  return this.isLoggedIn;
}

onLogOut() {
  this.auth.doLogout();
  this.isLoggedIn = this.auth.isLoggedIn();
  this.myRoute.navigate(['login']);
}

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

}
