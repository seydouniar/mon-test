import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: string;
  @Input() indexOfPost: number;
  @Input() postLoveIts: number;
  constructor(private postService: PostService) { }

  ngOnInit() {
    
  }

  loveIt() {
      this.postService.loveOne(this.indexOfPost);
  }

  dontLoveIt() {
    this.postService.dontLoveOne(this.indexOfPost);
  }

  getColor() {
    if(this.postService.getLoveNumber(this.indexOfPost) > 0) {
      return 'green';
    } else if(this.postService.getLoveNumber(this.indexOfPost) < 0) {
      return 'red';
    }
  }

  deletePost(){
    this.postService.deleteOnePost(this.indexOfPost);
  }
}
