import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    amount =0
    dropdownItems = [{name:'burgers' , path:'burgers',icon:'lunch_dining'},{name:'pizza' , path:'pizza',icon:'local_pizza'},{name:'pasta' , path:'pasta',icon:'ramen_dining'},
    {name:'soup' , path:'soup',icon:'soup_kitchen'},{name:'drinks' , path:'drinks',icon:'liquor'}
]
  links = [{name:'home' , path:'' , icon:'home',dropdown:null} ,{name:'menu' , path:null , icon:'restaurant_menu',dropdown:this.dropdownItems} ,{name:'info' , path:'info' , icon:'food_bank',dropdown:null} , {name:'' , path:'pay' , icon:'add_shopping_cart',dropdown:null}]
  constructor(private addToCartService : AddToCartService ) { }

    
  ngOnInit(): void {
    this.addToCartService.$products.subscribe((products) => this.amount = products.length)
  }
  onLinkClick(){
    console.log('clicked')
  }
}
