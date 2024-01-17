import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MenuComponent } from './header/menu/menu.component';
import { BottomMenuComponent } from './header/bottom-menu/bottom-menu.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './main/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    MenuComponent,
    BottomMenuComponent,
    MainComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
