import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostPayload } from './post-payload';
import { Router } from '@angular/router';
import { AddPostService } from 'src/app/services/add-post.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {


  addPostForm : FormGroup;
  title = new FormControl('');
  body = new FormControl('');
  currentDate = new Date();

  postPayload:PostPayload;

  constructor(private addPostService:AddPostService,private router:Router,
    private tokenStorageService: TokenStorageService) {

    this.addPostForm = new FormGroup({
      title:this.title,
      body:this.body
    });

    this.postPayload = {
      id:'',
      content:'',
      title:'',
      username:'',
      createdOn:''
    }
   }

  ngOnInit(): void {
  }


  addPost(){
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.postPayload.username = this.tokenStorageService.getUtilisateur().username;
    this.postPayload.createdOn = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
    this.addPostService.addPost(this.postPayload).subscribe(data => {
      //this.router.navigateByUrl('/publication');
      this.reloadPage();
    },error => {
      console.log('Failed add post');
    })
    

  }

  reloadPage() : void
  {
    window.location.reload() ;
  }

}
