import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { IComment } from './SharedClassesAndTypes/IComment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
// https://jsonplaceholder.typicode.com/posts/1/comments
  _url:string = "https://jsonplaceholder.typicode.com/posts"
  errorMessage:any
  constructor(private http:HttpClient ,private activeRoute : ActivatedRoute) { }

  getComments(id:any):Observable<IComment[]>{
    return this.http.get<IComment[]>(this._url+`/${id}/comments`).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }

}
