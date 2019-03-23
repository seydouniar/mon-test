import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.sass']
})
export class NewPostComponent implements OnInit {
  newForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private postService: PostService,private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newForm = this.formBuilder.group({
      title: ['',Validators.required],
      content: ['',Validators.required],
    })
  }
  onSubmitForm(){
    const formValue = this.newForm.value;
    this.postService.addpost(formValue['title'],formValue['content']);
    this.router.navigate(['/posts']);
  }

}
