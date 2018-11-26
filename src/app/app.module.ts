import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { convertToSpaces } from './shared/convert-to-spaces.pipe';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule, 
        MatListModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faStar, faTrashAlt, faCoffee} from '@fortawesome/free-solid-svg-icons';
import { AddProductComponent } from './add-product/add-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { SignupComponent } from './signup/signup.component';
import {AuthGuard} from './shared/auth.guard';
import {AuthService} from './shared/auth.service';
import {NotificationService} from './shared/notification.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DisplayClipartComponent } from './display-clipart/display-clipart.component';

//npm i @angular/material@6.4.7
//npm i @angular/cdk6.4.7

//Icons
library.add(faStar);
library.add(faTrashAlt);
library.add(faCoffee);

//Routes
const routes : Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full',canActivate: [AuthGuard]},
  { path: 'product-list', component: ProductListComponent,canActivate: [AuthGuard]},
  { path: 'add-product', component: AddProductComponent,canActivate: [AuthGuard]},
  { path: 'home', component: ProductListComponent,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '**', redirectTo: 'login', canActivate: [AuthGuard]}

];


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    convertToSpaces,
    StarRatingComponent,
    NotificationComponent,
    AddProductComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DisplayClipartComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
   
    AngularFireModule.initializeApp(environment.firebase,),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuard, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
