import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import {Role} from "../../enum/Role";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = './assets/images/logo_app.png'
  hide = true;
  isInvalid: boolean;
  isLogout: boolean;
  submitted = false;
  form : any = {
    username : null,
    password : null
  };
  isLoggedIn = false ;
  isLoginFailed = false ;
  errorMessage = '' ;
  returnUrl = '/';
  roles : string[] = [] ;
  constructor(
    private authService : AuthService,
    private tokenStorage : TokenStorageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken())
    {
      this.isLoggedIn = true ;
      this.roles = this.tokenStorage.getUtilisateur().roles;
      let params = this.route.snapshot.queryParamMap;
      this.isLogout = params.has('logout');
      this.returnUrl = params.get('returnUrl');
    }
  }

  onSubmit(): void
  {
    this.submitted = true;
    this.authService.login(this.form).subscribe(
      data => {
        /*if (data) {
          if (data.role == Role.Fournisseur) {

              this.returnUrl = '/seller';
          }
          this.router.navigateByUrl(this.returnUrl);
        } else {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUtilisateur(data);
          this.isLoggedIn = true ;
          this.isLoginFailed = false ;
          this.roles = this.tokenStorage.getUtilisateur().roles ;
          this.reloadPage();
        }*/
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUtilisateur(data);
          this.isLoggedIn = true ;
          this.isLoginFailed = false ;
          this.roles = this.tokenStorage.getUtilisateur().roles ;
          this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true ;
      }
    );
  }

  reloadPage() : void
  {
    window.location.reload() ;
  }


}
