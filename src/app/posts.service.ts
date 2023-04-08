import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { IPost } from './SharedClassesAndTypes/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  _url:string = "https://jsonplaceholder.typicode.com/posts"
  errorMessage:any
  constructor(private http:HttpClient ,private activeRoute : ActivatedRoute) { }

  getPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }
}
