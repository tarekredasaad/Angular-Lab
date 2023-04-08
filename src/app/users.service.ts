import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IUser } from './SharedClassesAndTypes/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _url:string = "https://jsonplaceholder.typicode.com/users"
  errorMessage:any
  constructor(private http:HttpClient ,private activeRoute : ActivatedRoute) { }

  getUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }
}
