import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  newUserFormGroup! : FormGroup;
  constructor(private fb : FormBuilder, private utilisateurService:UtilisateurService, private router:Router) { }

  ngOnInit(): void {
    this.newUserFormGroup=this.fb.group({
      username : this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      email : this.fb.control(null,[Validators.required, Validators.email])
    });
  }

  handleSaveUser() {
    let utilisateur:Utilisateur=this.newUserFormGroup.value;
    this.utilisateurService.saveUser(utilisateur).subscribe({
      next : data=>{
        alert("User has been successfully saved!");
        //this.newUserFormGroup.reset();
        this.router.navigateByUrl("/users");
      },
      error : err => {
        console.log(err);
      }
    });
  }
}
