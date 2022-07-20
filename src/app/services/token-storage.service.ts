import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token'; 
const USER_KEY = 'auth-utilisateur' ; 

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  signOut() : void 
  {
    window.sessionStorage.clear(); 
  }
  public saveToken(token : string) : void 
  {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken() : string | null 
  {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUtilisateur(utilisateur : any) : void 
  {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY,JSON.stringify(utilisateur));
  }

  public getUtilisateur() :  any 
  {
    const utilisateur = window.sessionStorage.getItem(USER_KEY);
    if (utilisateur)
    {
      return JSON.parse(utilisateur);
    }
    return {} ; 
  }
}
