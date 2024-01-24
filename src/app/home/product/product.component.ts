import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() item!: any

  constructor(private router: Router){}
  addToCart(){
    this.router.navigate(['/cart']);
  }
}
