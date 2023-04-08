import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CheckAuthService } from '../../check-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent implements OnInit {
  constructor(private CheckAuthService:CheckAuthService,
    private route:Router){}
  ngOnInit(): void {

  }
  isLoggod:boolean=false
  form:any
  errorMessage:any
  register(registerForm:NgForm){
    console.log(registerForm.value);
    this.CheckAuthService.register(registerForm.value).subscribe({
      next:data=>this.form=data,
      error:error=>this.errorMessage=error
    })
    console.log(this.form);
    console.log(this.errorMessage);
    this.isDone()
  }

  isDone(){
    if(this.form != null){
      this.isLoggod=true;
      this.route.navigate(['home'])
    }
    }

}
