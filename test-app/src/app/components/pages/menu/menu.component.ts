import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Product } from './menu.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    products : Product[] = []
    searchTerm:string=''
    url:string = ''
    offset:number=0
  constructor(private productService : ProductServiceService , private router: Router) { }

  
  ngOnInit(): void {
    this.url = this.router.url.substring(1)
    // this.productService.getProductsByQuery({param:'query',value:this.url }).subscribe((res) => this.products = res.menuItems)
    this.productService.getProductsByQuery({param:'query' ,value:this.url }).subscribe((res) => this.products = res.menuItems)
  }
  GetChildData(term:string){
this.searchTerm=term
  }
}
