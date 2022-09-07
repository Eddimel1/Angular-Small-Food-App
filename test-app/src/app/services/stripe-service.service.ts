import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {loadStripe} from '@stripe/stripe-js';
@Injectable({
  providedIn: 'root'
})
export class StripeServiceService {
    //use your stripekey and replace price in lineItems with yours from your stripe account
    baseUrl = 'http://localhost:3000/pay'
    id:string=''
  constructor(private http:HttpClient) { }
  async getStripesRedirectUrl(){
     const headers = new HttpHeaders().append('Access-Control-Allow-Origin','*')
     this.http.get<string>(this.baseUrl,{headers:headers}).subscribe((id) => this.id = id)
    const stripe = await loadStripe(environment.stripe_publishable_key);
    await stripe?.redirectToCheckout({sessionId:this.id ,lineItems:[{quantity:10,price:'price_1Lf4JAFmHHGG4TXijQHeX63l'}],successUrl:'http://localhost:4200',cancelUrl:'http://localhost:4200'
    , mode:'payment'
})

  }
}
