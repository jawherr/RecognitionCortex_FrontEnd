import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import { JwtResponse } from 'src/app/response/JwtResponse';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Role } from 'src/app/enum/Role';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {


    currentUtilisateurSubscription: Subscription;
    name$;
    name: string;
    currentUtilisateur: JwtResponse;
    root = '/';
    Role = Role;

    constructor(private userService: UtilisateurService,
                private router: Router,
    ) {

    }


    ngOnInit() {
        this.name$ = this.userService.name$.subscribe(aName => this.name = aName);
        this.currentUtilisateurSubscription = this.userService.currentUtilisateur.subscribe(user => {
            this.currentUtilisateur = user;
            if (!user || user.role == Role.Fournisseur) {
                this.root = '/';
            } else {
                this.root = '/seller';
            }
        });
    }

    ngOnDestroy(): void {
        this.currentUtilisateurSubscription.unsubscribe();
        // this.name$.unsubscribe();
    }

    /*logout() {
        this.userService.logout();
        // this.router.navigate(['/login'], {queryParams: {logout: 'true'}} );
    }*/

}
