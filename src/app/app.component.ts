import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  adminPermission : boolean = false ; 
  rhPermission : boolean = false ; 
  userPermission : boolean = false ; 
  cePermission : boolean = false ; 
  faPermission : boolean = false ; 
  sideBarOpen = true;

  utilisateur : any ;
  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.utilisateur = this.tokenStorageService.getUtilisateur();
      this.roles = this.utilisateur.roles;
      this.rhPermission = this.permissionsRH();
      this.adminPermission = this.permissionsAdmin();
      this.userPermission = this.permissionsUser();
      this.cePermission = this.permissionsCE();
      this.faPermission = this.permissionsFA();
     // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
     // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
    }

  }

  isSideNavCollapsed = false;
  screenWidth = 0;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  public permissionsAdmin(): boolean 
  {
    return this.utilisateur.roles.includes("ROLE_ADMIN");
  }
  public permissionsRH(): boolean 
  {
    return this.utilisateur.roles.includes("ROLE_RH");
  }
  public permissionsUser(): boolean
  {
    return this.utilisateur.roles.includes("ROLE_USER");
  }
  public permissionsCE(): boolean 
  {
    return this.utilisateur.roles.includes("ROLE_CE");
  }
  public permissionsFA(): boolean
  {
    return this.utilisateur.roles.includes("ROLE_FA");
  }

}
