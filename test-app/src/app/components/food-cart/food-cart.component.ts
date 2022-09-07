import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { extendedProduct } from 'src/app/services/products.interface';
import { Product } from '../pages/menu/menu.interface';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.scss']
})
export class FoodCartComponent implements OnInit{
    amount = 0
   
  constructor(private addToCartService : AddToCartService) { }
  @Input() product:Product | null = null
 
  price = Math.round(Math.abs(Math.random()) * 50)+1
  extendedProduct = {...this.product! ,amount : this.amount,price:this.price}
  ngOnInit(): void {
    this.extendedProduct = {...this.product! ,amount : this.amount,price:this.price}
  }
 
  public increment(){
    this.extendedProduct.amount++
  }
  public decrement(){
 
    if( this.extendedProduct.amount > 0)  this.extendedProduct.amount--
 
  }
  addProduct($event:Event ,product:extendedProduct){
    this.addToCartService.addProduct(product)
  }
}
