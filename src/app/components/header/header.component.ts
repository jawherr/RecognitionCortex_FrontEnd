import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SoldeService } from 'src/app/services/solde.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  coin = './assets/images/coin.png'
  gift = './assets/images/gift.png'
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  adminPermission : boolean = false ; 
  
  user : any;
  solde : any;
  utilisateur : any;
  constructor(private tokenStorageService: TokenStorageService,public router: Router,
    private utilisateurService:UtilisateurService,
    private soldeService:SoldeService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.utilisateur = this.tokenStorageService.getUtilisateur();
      this.user = this.utilisateurService.get(this.tokenStorageService.getUtilisateur().username).subscribe(e=>{
        this.user=e;
      });
      //this.solde = this.soldeService.getSolde(1);
      this.roles = this.utilisateur.roles;
      this.adminPermission = this.permissions();
     // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
     // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
    }

  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  public permissions(): boolean
  {
    return this.utilisateur.roles.includes("ROLE_ADMIN");
  }

  public toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
