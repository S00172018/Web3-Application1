import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { IProduct } from '../product-list/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageStr: string;
  imageUrl: string;
  showDisplayClipartComponent: boolean;


  listFilter: string;
  constructor(private _productService: ProductService, private router: Router) { }


  ngOnInit() {
  }

  //controls hiding the component until the button press
  showHideDisplayClipartComponent(): boolean {
  this.showDisplayClipartComponent = !this.showDisplayClipartComponent;
  return false;
  }
  //recieves the url string from the display-clipart component
  //and displays in the textbox
  addImageStringToFormTextBox(evt): boolean {
    this.imageUrl = evt;
    return false;
  }

  addProduct(): void {
    let product:IProduct = {
      productId:this.productId,
      productName:this.productName,
      productCode:this.productCode,
      releaseDate:this.releaseDate,
      description:this.description,
      price:this.price,
      starRating:this.starRating,
      imageStr:this.imageStr,
      imageUrl:this.imageUrl,
      
    };
    this._productService.addProduct(product);
    //redirect to the product-list component
    this.router.navigate(['/product-list']);
  }
}
