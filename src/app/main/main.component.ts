import { Component,  inject, Input } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  //Expect an input named productList that is of type Product(an interface).
  @Input() productList!: Product[];
  
  // Injection of my service(basically where i have fetched my data)
  productService: ProductService = inject(ProductService);

  constructor(){
    this.productService.fetchAllProducts().then((productListArray: Product[]) => {
      this.productList = productListArray
      console.log(this.productList)
    })
  }
}
