import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '@gadgets-store/header';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  imports: [CommonModule, HeaderModule],
  declarations: [MainPageComponent]
})
export class HomeModule {}
