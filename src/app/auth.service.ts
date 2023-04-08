import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from './SharedClassesAndTypes/userModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 _url:string="http://localhost:3000/enroll";
 loginUrl:string="http://localhost:3000/db"
  constructor(private http:HttpClient) { }

  enroll(user:userModel){
  return  this.http.post(this._url,user);
  }
  login():Observable<any>{
    console.log('here');
    
    return  this.http.get(this.loginUrl);
  }
}
