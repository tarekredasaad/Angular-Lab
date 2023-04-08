import { Component ,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 discount :number = 55
  isLoggedIn:boolean=true;
  constructor() { }
  ngOnInit(): void {
  }
  name=""
  Isbuy=false
  show=true
  categories = ["mobile","PC","Desktop"];
  Products=[
    {"id":1,"title":"Iphone1","price": 7840,"isbuy":false},
    {"id":2,"title":"Iphone2","price": 7850,"isbuy":false},
    {"id":3,"title":"Iphone3","price": 7860,"isbuy":false},
    {"id":4,"title":"Iphone4","price": 7800,"isbuy":false}
  ];
  storeName="amazon Store"
  personid :any=0
  hides()
  {
    if(this.show){
      this.show =false
    }else{

      this.show =true
    }
  }
  buy(id:any)
  {
    this.personid=id
    console.log(this.personid);
    this.Products[id-1].isbuy=true;
    console.log(this.Products[id-1].isbuy);

    if(this.Isbuy){
      this.Isbuy =false
    }else{

      this.Isbuy =true
    }
    console.log("Hello from type script class");
    // this.message="Welcome from type script class";
    // console.log(event);
  }
}
