import { Component } from '@angular/core';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  faCircleArrowLeft = faCircleArrowLeft;
  constructor(private router: Router){}
  navigateToShop(){
    this.router.navigate(['/shop']);
  }
}
