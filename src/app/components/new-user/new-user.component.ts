import { Location } from '@angular/common';
import { Component, OnInit,Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { Utilisateur } from 'src/app/models/utilisateur';
import { Equipe } from 'src/app/models/equipe';
import { EquipeService } from 'src/app/services/equipe.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
 

  @Input() user?: User;
  EquipeList : any;
 dataSource : any;
 
  constructor(private fb : FormBuilder, private eq : EquipeService,
    private utilisateurService:UtilisateurService,  private location : Location, 
     private route : ActivatedRoute, 
     private router : Router) { }
    
  //formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');

  newUserFormGroup = this.fb.group({ 
    username:this.user?.username,
    email:this.user?.email,
    password:this.user?.password,
    nom:this.user?.nom,
    date_naissance:this.user?.date_naissance,
    address:this.user?.address,
    created_at:this.user?.created_at,
    updated_at:this.user?.updated_at,
    cover_image:this.user?.cover_image,
    brief:this.user?.brief,
    solde:this.user?.solde,
    calendrier:this.user?.calendrier,
    roles:this.user?.roles
   });
  ngOnInit(): void {
   
    this.getUser();
    this.getEquipe();
  }
  
  getEquipe() : void
  { 
    this.eq.getEquipes().subscribe(
      (response : Equipe[]) => {
        this.EquipeList = response;
        this.dataSource = new MatTableDataSource(this.EquipeList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }
  
  getUser() : void
  {
    const id= Number (this.route.snapshot.paramMap.get('id'));
    this.utilisateurService.getUser(id).subscribe(user=> this.user= user); 
  }

  addUser(username: string,email: string,nom: string,address: string
  ) : void
  {
    let nUser: User = new User(username,email,nom,address);
    this.utilisateurService.addUser(nUser)
    .subscribe(()=>this.goBack());
  }

   saveUser1(): void 
   {
     if(this.user)
     {
       this.utilisateurService.updateUtilisateur(this.user).subscribe(
         () => this.goBack()
       );
     }
   }
 
   goBack() : void 
   {
     this.location.back() ; 
   }
 
   
   
 
 }
 

