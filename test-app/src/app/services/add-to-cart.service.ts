import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { extendedProduct } from './products.interface';
@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

    products = new BehaviorSubject<extendedProduct[]>([])
    $products = this.products.asObservable()
    total = new BehaviorSubject<number>(0)
    
  constructor() { }
  addProduct(product:extendedProduct){
    const currArr = this.products.getValue()
    const mergedArr = currArr.concat(product)
    this.products.next(mergedArr)
    this.total.next(this.totalAmount(mergedArr))
  }
  removeProduct(id:number){
    let arr = this.products.getValue()
    const index = arr.findIndex((elem) => elem.id === id)
   
     if(index === 0){
        arr.shift()
        this.products.next(arr)
    }
  
    else{
     arr.splice(index,1)
     this.products.next(arr)
    }
     
  }
  totalAmount(products:extendedProduct[]){
    let amount = 0
    amount = products.reduce((acc,curr) =>{
        return acc + (curr.price *curr.amount)
    },0)
    return amount
  }
 
}
