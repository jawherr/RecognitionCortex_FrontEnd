import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { RoleService  } from 'src/app/services/role.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  badge = './assets/images/badge-icone.png'
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  adminPermission : boolean = false ; 

  user : any ;
  role : any ;
  user2 : any;
  roleName : string;
  

  constructor(private tokenStorageService: TokenStorageService,
    private utilisateurService:UtilisateurService ,
    private roleService : RoleService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.user = this.utilisateurService.get(this.tokenStorageService.getUtilisateur().username).subscribe(e=>{
        this.user=e;

      })
      this.role = this.tokenStorageService.getUtilisateur().roles[0];


      this.roles = this.user.roles;
      if (this.role=="ROLE_ADMIN") this.roleName="Admin"
      if (this.role=="ROLE_CE") this.roleName="CE"
      if (this.role=="ROLE_FA") this.roleName="FA"
      if (this.role=="ROLE_RH") this.roleName="Rh"
      if (this.role=="ROLE_USER") this.roleName="User"
    }
  }

}
