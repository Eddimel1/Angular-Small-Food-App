import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { InfoComponent } from './components/pages/info/info.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { PaymentCartComponent } from './components/pages/payment-cart/payment-cart.component';

const routes: Routes = [
    {path:'' , component:HomeComponent ,pathMatch: 'full'},  {path:'menu' , component:MenuComponent},
    {path:'pay' , component:PaymentCartComponent} ,{path:'info' , component:InfoComponent},{path:'menu' , component:MenuComponent},
    {path:'soup' , component:MenuComponent},
    {path:'burgers' , component:MenuComponent},
    {path:'pasta' , component:MenuComponent},
    {path:'pizza' , component:MenuComponent},
    {path:'drinks' , component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
