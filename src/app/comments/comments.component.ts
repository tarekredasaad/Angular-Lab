import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommentsService } from '../comments.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{
  @Output() commentEvent = new EventEmitter();
  postId:any
  comments:any=[];
  errorMessage:any
constructor(private CommentsService:CommentsService,private activatedRoute:ActivatedRoute){}
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    this.postId=params.get("id");
   })

 this.CommentsService.getComments(this.postId).subscribe({
  next:data=>this.comments=data,
  error:error=>this.errorMessage=error
})

}
GetComment(){
  this.commentEvent.emit(this.comments);
}

}
