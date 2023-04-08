import { Component,EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  @Output() childEvent = new EventEmitter();
  constructor() { }
  message="";
  List =[
    {"id":1,"title":"Iphone1","price": 7840,"isbuy":false},
    {"id":2,"title":"Iphone2","price": 7850,"isbuy":false},
    {"id":3,"title":"Iphone3","price": 7860,"isbuy":false},
    {"id":4,"title":"Iphone4","price": 7800,"isbuy":false}
  ];
  GetData()
  {
    //fire event to hold data
    this.childEvent.emit(this.List);
  }
  ngOnInit(): void {
  }
  SayWelcome()
  {
   this.message = "Welcome parent from Child";

  }
}
// // function Output(): (target: ChildComponentComponent, propertyKey: "childEvent") => void {
// //   throw new Error('Function not implemented.');
// }

