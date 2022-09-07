import { StripeServiceService } from './../../../services/stripe-service.service';
import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MenuLayoutModule } from '../../layouts/menu-layout/menu-layout.module';
import { PaymentCartComponent } from './payment-cart.component';
import { AddToCartService } from 'src/app/services/add-to-cart.service';




@NgModule({
  declarations:[PaymentCartComponent],
  imports: [CommonModule,MatIconModule,MenuLayoutModule],
    providers:[AddToCartService , StripeServiceService]
})
export class PaymentCartModule { }
