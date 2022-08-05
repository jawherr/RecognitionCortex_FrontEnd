import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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
  
  utilisateur : any;
  constructor(private tokenStorageService: TokenStorageService,public router: Router) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.utilisateur = this.tokenStorageService.getUtilisateur();
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
