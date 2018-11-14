import { ProductService } from '../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    

pageTitle: string = "Joe's Products";
imageWidth : number = 50;
imageMargin : number = 2;
showImage : boolean = false;
errorMessage : string;

_listFilter: string;
get listFilter(): string {
    return this._listFilter;
}
set listFilter (value: string) {
this._listFilter = value;
this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;

}

filteredProducts: IProduct[];
products: IProduct[];

constructor(private _productService : ProductService){

}

performFilter(filterBy: string): IProduct[] {
    filterBy =filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

onNotify(message: string): void {
    console.log(message);
}


toggleImage(): void {
this.showImage = !this.showImage;
}

ngOnInit(): void {
    this._productService.getProducts().subscribe(products => {
        this.products = products,
        this.filteredProducts = this.products;
    },
    error => this.errorMessage = <any>error);
    
}


}