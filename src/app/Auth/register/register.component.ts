import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from 'src/app/SharedClassesAndTypes/userModel';
import { AuthService } from 'src/app/auth.service';
import { ConfirmPasswordValidator } from 'src/app/validations/confirmPassword.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  topics:any=["facebook","youtube","google"]
  userModel:any=new userModel("","","","")
  constructor(private enrollService:AuthService,
    private router:Router,private fb:FormBuilder){}
  ngOnInit(): void {

  }
  registerationForm= this.fb.group({
    userName:[''],
    email:[''],
    password:[''],
    confirmPassword:[''],
  },{validator:[ConfirmPasswordValidator]});

  get userName()
  {
    return this.registerationForm.get('userName');
  }
  get email()
  {
    return this.registerationForm.get('email');
  }

  submitData()
    {
      this.enrollService.enroll(this.userModel).subscribe({
        next:data=>console.log(data),
        error:error=>console.log(error)
      });
       this.router.navigate(['login'])
    }
}
