import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { API_URL } from '../../environments/environment';
import { JwtResponse } from '../response/JwtResponse';
import { CookieService } from 'ngx-cookie-service';
import {environment} from "../../environments/environment";
import { User } from '../models/user';

const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private currentUtilisateurSubject: BehaviorSubject<JwtResponse>;
    public currentUtilisateur: Observable<JwtResponse>;
    public nameTerms = new Subject<string>();
    public name$ = this.nameTerms.asObservable();
    constructor(private http: HttpClient,
                private cookieService: CookieService) {
        const memo = localStorage.getItem('currentUtilisateur');
        this.currentUtilisateurSubject = new BehaviorSubject<JwtResponse>(JSON.parse(memo!));
        this.currentUtilisateur = this.currentUtilisateurSubject.asObservable();
        cookieService.set('currentUtilisateur', memo!);
    }

    get currentUtilisateurValue() {
        return this.currentUtilisateurSubject.value;
    }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(API_URL +'/utilisateur',httpOptions);
  }

  getUtilisateur(utilisateur : Utilisateur) : Observable<Utilisateur> 
  {
    const url = `${API_URL}/utilisateur/profile`;
    return this.http.put<Utilisateur>(url, utilisateur); 
  }

  getUser(id : number) : Observable<User> 
  {
    return this.http.get<User>(API_URL+`/utilisateur/${id}`,httpOptions) ;
  }

  public updateUtilisateur(utilisateur : User) : Observable<User> 
  {
    return this.http.put<User>(API_URL+'/utilisateur',utilisateur); 
  }

  update(utilisateur: Utilisateur): Observable<Utilisateur> {
    const url = `${API_URL}/profile`;
    return this.http.put<Utilisateur>(url, utilisateur);
  }
  
  get(username: string): Observable<Utilisateur> {
    const url = `${API_URL}/utilisateur/profile/${username}`;
    return this.http.get<Utilisateur>(url);
  }

  public deleteUtilisateur( id : number) : Observable<void> 
  {
    return this.http.delete<void>(API_URL+`/utilisateur/${id}`); 
  }

  addUser(user : User) : Observable<User> 
  {
    return this.http.post<User>(API_URL+'/utilisateur',user); 
  }

  public getUsers():Observable<Array<Utilisateur>>{
    return this.http.get<Array<Utilisateur>>(environment.backendHost+"/users")
  }
  public searchUsers(keyword : string):Observable<Array<Utilisateur>>{
    return this.http.get<Array<Utilisateur>>(environment.backendHost+"/users/search?keyword="+keyword)
  }
  public saveUser(user: User):Observable<User>{
    return this.http.post<User>(environment.backendHost+"/users",user);
  }
  public deleteUser(id: number){
    return this.http.delete(environment.backendHost+"/users/"+id);
  }

}
