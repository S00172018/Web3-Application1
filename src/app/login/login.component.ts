import { Component, OnInit, Pipe } from '@angular/core';
import { AuthService } from '../shared/auth.service'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
errorMessage: string;
form;
  constructor(private fb: FormBuilder, private myRoute: Router,
    private auth: AuthService) {
      this.form = fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
     }

  ngOnInit() {
  }

   tryFacebookLogin(){
     this.auth.doFacebookLogin()
     .then(res => {
       this.myRoute.navigate(['product-list']);
     })
   }

   tryGoogleLogin(){
     this.auth.doGoogleLogin()
     .then(res => {
       this.myRoute.navigate(['product-list']);
     })
  }

  login(){
    this.auth.doLogin(this.form.value)
    .then(res => {
      this.myRoute.navigate(['product-list']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }
}
