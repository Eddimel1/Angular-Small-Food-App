import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MenuLayoutModule } from '../../layouts/menu-layout/menu-layout.module';
import { FoodCartComponent } from '../../food-cart/food-cart.component';
import { SearchComponent } from '../../search/search.component';
import { MenuComponent } from './menu.component';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { FilterPipePipe } from 'src/app/pipes/filter-pipe.pipe';


@NgModule({
  declarations: [SearchComponent,FoodCartComponent,MenuComponent,FilterPipePipe],
  imports: [CommonModule , MenuLayoutModule , MatIconModule , FormsModule],
  providers:[AddToCartService]
})
export class MenuModule { }
