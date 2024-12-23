import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  public product_api="https://dummyjson.com/products";

  constructor( public httpclient:HttpClient)  {

   }

   getproducts(){
    return this.httpclient.get(this.product_api)
   }


   
}
