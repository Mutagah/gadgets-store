import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './home/main.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cart', component: CartComponent },
  {path: 'shop', component: ShopComponent}
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
