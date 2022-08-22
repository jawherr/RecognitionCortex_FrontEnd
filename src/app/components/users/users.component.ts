import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users! : Observable<Array<Utilisateur>>;
  errorMessage!: string;
  searchFormGroup : FormGroup | undefined;
  constructor(private utilisateurService : UtilisateurService, private fb : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handleSearchUsers();
  }
  goTo1(){
    this.router.navigate([
      '/addusers'
  
    ])
  
  }
  handleSearchUsers() {
    let kw=this.searchFormGroup?.value.keyword;
    this.users=this.utilisateurService.searchUsers(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  handleDeleteUser(user: Utilisateur) {
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.utilisateurService.deleteUser(user.id).subscribe({
      next : (resp) => {
        this.users=this.users.pipe(
          map(data=>{
            let index=data.indexOf(user);
            data.slice(index,1)
            return data;
          })
        );
      },
      error : err => {
        console.log(err);
      }
    })
  }

  handleUserAccounts(user: Utilisateur) {
    this.router.navigateByUrl("/user-accounts/"+user.id,{state :user});
  }
}
