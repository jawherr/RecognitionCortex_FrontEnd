import { Component, OnInit, ViewChild } from '@angular/core';
import { PublicationService } from '../../services/publication.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Publication } from '../../models/publication';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostPayload } from '../add-post/post-payload';
import { AddPostService } from 'src/app/services/add-post.service';
@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})


export class PublicationComponent implements OnInit {

  posts:Observable<Array<PostPayload>>;

  user : any;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  adminPermission : boolean = false ; 
  
  constructor(private postService:AddPostService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    this.posts = this.postService.getAllPosts();

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.user = this.tokenStorageService.getUtilisateur();
      this.roles = this.user.roles;
    }
  }
}
