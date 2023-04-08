import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Iproduct } from './SharedClassesAndTypes/IProduct';
import { ActivatedRoute } from '@angular/router';
// import {IProduct} from 'src/app/SharedClassesAndTypes';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
_url:string = "/assets/Data/Products.json"
  constructor(private http:HttpClient ,private activeRoute : ActivatedRoute) { }
products:any =[
  {"id":1,"title":"Iphone1","price": 7840,"isbuy":false},
  {"id":2,"title":"Iphone2","price": 7850,"isbuy":false},
  {"id":3,"title":"Iphone3","price": 7860,"isbuy":false},
  {"id":4,"title":"Iphone4","price": 7800,"isbuy":false}
]
id:any
// product:any
product = <Iproduct>{};
//  pp:Iproduct
  getProduct():Observable<Iproduct[]>
  {
    return this.http.get<Iproduct[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }
  getProductById(id:any){
    if(isNaN(id)){
      return null;
    }
    for(var i:any =0;i<this.products.length;i++){
      if(this.products[i].id == id){
        this.product=this.products[i]
      }
    }
    console.log(this.product);
    return this.product;
    // this.product.
    // this.id =this.activeRoute.snapshot.paramMap.get('id')
    // return this.http.get<Iproduct >(this.products).pipe(catchError((err)=>{
    //   return throwError(()=>err.message ||"server error");
    // }));
  }
}
