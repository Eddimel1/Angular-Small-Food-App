import { Component, OnInit, OnChanges } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { extendedProduct } from 'src/app/services/products.interface';
import { StripeServiceService } from 'src/app/services/stripe-service.service';



@Component({
  selector: 'app-payment-cart',
  templateUrl: './payment-cart.component.html',
  styleUrls: ['./payment-cart.component.scss']
})
export class PaymentCartComponent implements OnInit{
   
  constructor(private addToCartService : AddToCartService , private stripeService : StripeServiceService) { }
  products:extendedProduct[] = []
  total:number = 0
  id:string = ''
  ngOnInit(): void {
    this.addToCartService.$products.subscribe((products) => {this.products = products})
    this.addToCartService.total.subscribe((total) => this.total = total)
  }
  remove(event:Event,id:number){
    this.addToCartService.removeProduct(id)
  }
  onConfim(){
    const id = this.stripeService.getStripesRedirectUrl()

};
}