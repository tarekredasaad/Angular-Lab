import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {

  }
  login(loginForm:NgForm){
    console.log(loginForm);

  }
}
