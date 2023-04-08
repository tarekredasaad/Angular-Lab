import { Component, ViewChild ,OnInit} from '@angular/core';
import {ChildComponentComponent} from '../child-component/child-component.component'
@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit{
  @ViewChild(ChildComponentComponent)
  child: ChildComponentComponent = new ChildComponentComponent;
  messageFromChild:any;
  constructor() { }

  ngOnInit(): void {
  }
  Invoke(){
    // this.ngAfterViewInit()
    this.child.SayWelcome()
  }
  ngAfterViewInit()
  {
    // this.child.SayWelcome();
  }
}
