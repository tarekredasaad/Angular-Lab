import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users:any=[];
  errorMessage:any
constructor(private UsersService:UsersService,private http:HttpClient){}
ngOnInit(): void {
 this.UsersService.getUsers().subscribe({
  next:data=>this.users=data,
  error:error=>this.errorMessage=error
})

}
}
