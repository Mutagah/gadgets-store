import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitlebarComponent } from './components/titlebar/titlebar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent, TitlebarComponent],
  exports: [NavbarComponent, TitlebarComponent]
})
export class HeaderModule {}
