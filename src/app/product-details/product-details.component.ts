import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product:any
  errorMessage:any=""
  prodID:any
  constructor(private ProductService:ProductService,private activatedRoute:ActivatedRoute){}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.prodID=params.get("id");
     })

  this.product=  this.ProductService.getProductById(this.prodID)

  }
}
