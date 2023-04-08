import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  style:string="text";
  isDisabled:boolean=false;
  textColor:string="red";
  hasError:boolean=true;


  messageStyles={
    color:"red",
    fontStyle:"italic",
    backgroundColor:"blue"
  }
  constructor() { }

  ngOnInit(): void {
  }
}
