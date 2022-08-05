import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Utilisateur } from 'src/app/models/utilisateur';
@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.css']
})
export class UserAccountsComponent implements OnInit {
  userId! : string ;
  utilisateur! : Utilisateur;
  constructor(private route : ActivatedRoute, private router :Router) {
    this.utilisateur=this.router.getCurrentNavigation()?.extras.state as Utilisateur;
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];

  }

}
