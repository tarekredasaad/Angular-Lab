import { Component,OnInit } from '@angular/core';
import { CheckAuthService } from '../../check-auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  constructor(private CheckAuthService:CheckAuthService,private route:Router){}
  form:any
  isLoggod:boolean=false
    errorMessage:any
  ngOnInit(): void {

  }
login(loginForm:NgForm){
  console.log(loginForm.value);
  this.CheckAuthService.login(loginForm.value).subscribe({
    next:data=>this.form=data,
    error:error=>this.errorMessage=error
  })
  console.log(this.form);
  console.log(this.errorMessage);
  this.isLoggedIn()
}
isLoggedIn(){
if(this.form != null){
  this.isLoggod=true;
  this.route.navigate(['home'])
}
}
  // register(registerForm:NgForm){
  //   console.log(registerForm.value);
  //   this.CheckAuthService.register(registerForm.value).subscribe({
  //     next:data=>this.form=data,
  //     error:error=>this.errorMessage=error
  //   })
  //   console.log(this.form);
  //   console.log(this.errorMessage);
  // }
}
