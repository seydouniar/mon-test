import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit,OnDestroy{
  posts: any[];
  postSubscription: Subscription;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts:any[])=>{
          this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }
  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

 
}
