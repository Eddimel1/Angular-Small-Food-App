import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseType } from './products.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
    private baseUrl =  "https://api.spoonacular.com/food/menuItems/search"
  constructor(private http:HttpClient) { }
  getProductsByQuery(params:{param :string , value:string}){
    const parameters1 = new HttpParams().append(params.param,params.value).append('apiKey' , environment.spoonacular_api_key).append('number',20)
    console.log(parameters1)
    return this.http.get<ResponseType>(this.baseUrl,{params:parameters1})
  }
//   getProductsByQuery2(params:{[key:string]:string | number}){

//     let parameters1 
//     const keys = Object.keys(params)
//     console.log(keys)
//      keys.forEach((key,i)=>{
//         parameters1 = new HttpParams()
//         console.log(key)
//         parameters1.append(key,params[key])
//     })
    
     
//     console.log(parameters1)
//     return this.http.get<ResponseType>(this.baseUrl,{params:parameters1})
//   }
}
