import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../posts.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentsComponent } from '../comments/comments.component';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  @ViewChild(CommentsComponent)
  Comment: CommentsComponent = new CommentsComponent(
    this.CommentsService,this.ActivatedRoute);

  posts:any=[];
  errorMessage:any
  postComment:any=[]
  comments:any=[]
constructor(private CommentsService:CommentsService,
  private ActivatedRoute:ActivatedRoute,
  private PostsService:PostsService,private router:Router
  ,private http:HttpClient){}
ngOnInit(): void {
 this.PostsService.getPosts().subscribe({
  next:data=>this.posts=data,
  error:error=>this.errorMessage=error
})

}
getcomment(id:any){
  this.CommentsService.getComments(id).subscribe({
    next:data=>this.comments=data,
    error:error=>this.errorMessage=error
  })
}
comment(id:any){
  this.router.navigate(["/comment",id]);
}
}
