import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = './assets/images/logo_app.png'
  hide = true;
  form : any = {
    username : null,
    password : null
  };
  isLoggedIn = false ;
  isLoginFailed = false ;
  errorMessage = '' ;
  roles : string[] = [] ;
  constructor(
    private authService : AuthService,
    private tokenStorage : TokenStorageService
  ) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken())
    {
      this.isLoggedIn = true ;
      this.roles = this.tokenStorage.getUtilisateur().roles ;
    }
  }

  onSubmit(): void
  {
    const {username,password} = this.form ;
    this.authService.username(username,password).subscribe(
      data => {
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
