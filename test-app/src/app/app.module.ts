import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLayoutModule } from './components/layouts/menu-layout/menu-layout.module'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { MenuModule } from './components/pages/menu/menu.module';
import { PaymentCartModule } from './components/pages/payment-cart/payment-cart.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { InfoModule } from './components/pages/info/info-module.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MenuModule,
    MenuLayoutModule,
    PaymentCartModule ,
    InfoModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
