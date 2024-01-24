import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MenuComponent } from './header/menu/menu.component';
import { BottomMenuComponent } from './header/bottom-menu/bottom-menu.component';
import { MainComponent } from './home/main.component';
import { ProductComponent } from './home/product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    MenuComponent,
    BottomMenuComponent,
    MainComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
