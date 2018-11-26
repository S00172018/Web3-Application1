import { Observable } from 'rxjs';
import { IProduct } from '../product-list/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable()
export class ProductService {
    private _productUrl = 'http://localhost:3000/products'

//Declerations
productsCollection: AngularFirestoreCollection<IProduct>;

products: Observable<IProduct[]>;

allProducts: IProduct[];
errorMessage: string;

  constructor(private _http: HttpClient, private _afs: AngularFirestore) { 

    //Connects to the database
    this.productsCollection = _afs.collection<IProduct>("products");

  }
 
  //Get Products
  getProducts(): Observable<IProduct[]>{
      this.products = this.productsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as IProduct;
          console.log("getProducts:data" + JSON.stringify(data));
          const id = a.payload.doc.id;
          console.log("getProducts:id = "+id);
          return { id, ...data};
        }))
      );
      return this.products;

   }

   //Delete Product
   deleteProduct(id:string): void { 
   this.productsCollection.doc(id).delete()
   .catch(error => {console.log("deleteProduct error: "+error); })
   .then(() => console.log('deleteProduct: id = '+id )); 
   }

   //Add Product
   addProduct(product: IProduct): void {
     this.productsCollection.add(product);
   }

   //Populate products (one time use)
addAllProducts() {

this._http.get<IProduct[]>(this._productUrl).subscribe(
  products => {
    this.allProducts = products;
    for (let product of this.allProducts) {
      console.log("Adding: " + product.productName);
      this.productsCollection.add(product);
    }

  },
  error => (this.errorMessage = <any>error)
);

}


//  private handleError(err: HttpErrorResponse) {
//    console.log(err.message);
//    return Observable.throw(err.message);
//    }


}
