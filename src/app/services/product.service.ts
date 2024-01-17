import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  // This is similar to providing a service in the app module.
  providedIn: 'root' 
})
export class ProductService {

  url = "http://localhost:3000/products";

  // Method to create product from our database.
  createProduct(){

  }
  
  // Method to fetch products from our database.
  async fetchAllProducts() : Promise<Product[]>{
    const data = await fetch(this.url);
    
    return await data.json() ?? []
  }
  // Method to delete product from our database
  deleteProduct(){

  }
  constructor() { }
}
