import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
products:any =[]
errorMessage:any=""
constructor(private ProductService:ProductService,private router:Router
  ,private activatedRoute:ActivatedRoute){}
selectedId:any

ngOnInit(): void {

  this.ProductService.getProduct().subscribe({
    next:data=>this.products=data,
    error:error=>this.errorMessage=error
  })
  this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    this.selectedId=params.get("id");
  })
}
navigate(id:any){

  this.router.navigate(["/product",id]);
}

}
