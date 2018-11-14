import { Observable } from 'rxjs';
import { IProduct } from '../product-list/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {
    private _productUrl = 'http://localhost:3000/products'

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
      return this._http.get<IProduct[]>(this._productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)); 

  }

private handleError(err: HttpErrorResponse) {
  console.log(err.message);
  return Observable.throw(err.message);
  }

}
