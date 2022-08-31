import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { Observable } from 'rxjs';
import { PostPayload } from '../add-post/post-payload';
import { AddPostService } from 'src/app/services/add-post.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Publication } from 'src/app/models/publication';
import { FormBuilder } from '@angular/forms';
import { PublicationService } from 'src/app/services/publication.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})


export class PublicationComponent implements OnInit {

  @Input() publication? : Publication 
  posts:Observable<Array<PostPayload>>;

  user : any;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  adminPermission : boolean = false;
  publicationForm = this.formBuilder.group(
    {
      nb_like : this.publication?.nb_like
    }
  ) ;
  
  constructor(private postService:AddPostService,
    private utilisateurService:UtilisateurService,
    private publicationService:PublicationService,
    private location : Location,
    private formBuilder : FormBuilder,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    this.posts = this.postService.getAllPosts();

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.user = this.utilisateurService.get(this.tokenStorageService.getUtilisateur().username).subscribe(e=>{
        this.user=e;

      })
      this.roles = this.user.roles;
    }
  }
  savePost(): void 
  {
    if(this.publication)
    {
      this.publicationService.updatePublication(this.publication).subscribe(
        () => this.goBack()
      );
    }
  }
  goBack() : void 
  {
    this.location.back() ; 
  }
}
