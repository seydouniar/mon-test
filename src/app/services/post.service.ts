import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PostService {

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  postSubject = new Subject<any[]>();
  private posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      loveIts: 0,
      createdAt: this.lastUpdate
    },
    {
      title: 'Mon deuxieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      loveIts: 0,
      createdAt: this.lastUpdate
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      loveIts: 0,
      createdAt: this.lastUpdate
    }
  ];

  constructor() { }
  emitPostSubject() {this.postSubject.next(this.posts.slice())}
  deleteOnePost(postIndex: number){
      this.posts.splice(postIndex,1);
      this.emitPostSubject();
    }
  
  addpost(title: string, content: string) {
    const currentDate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    });
    this.posts.push(
      {
        title: title,
        content: content,
        loveIts: 0,
        createdAt: currentDate
      }
    )
    this.emitPostSubject();
  }

  loveOne(postIndex:number){
    this.posts[postIndex].loveIts++;
    this.emitPostSubject();
  }
  dontLoveOne(postIndex:number){
    this.posts[postIndex].loveIts--;
    this.emitPostSubject();
  }
  getLoveNumber(postIndex: number) {
    return this.posts[postIndex].loveIts;
  }
}
