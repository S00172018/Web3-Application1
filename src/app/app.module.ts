import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { convertToSpaces } from './shared/convert-to-spaces.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';

//npm i @angular/material@6.4.7
//npm i @angular/cdk6.4.7

library.add(faStar);

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    convertToSpaces,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
