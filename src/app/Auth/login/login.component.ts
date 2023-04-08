import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userModel } from 'src/app/SharedClassesAndTypes/userModel';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  userModel:any=new userModel("","","","")
  data:any
  constructor(private enrollService:AuthService,private router:Router){}
  ngOnInit(): void {

  }
  submitData()
  {
      console.log(this.enrollService.login())
   this.data=   this.enrollService.login();
   console.log(this.data)
   if(this.userModel.email == this.data.email){
    this.router.navigate(['home']);
   }
    }

}
