import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';
import { API_URL } from '../../environments/environment';

const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(API_URL +'/utilisateur',httpOptions);
  }

  getUtilisateur(id : number) : Observable<Utilisateur> 
  {
    return this.http.get<Utilisateur>(API_URL+`/utilisateur/${id}`,httpOptions) ;
  }

  public updateUtilisateur(utilisateur : Utilisateur) : Observable<Utilisateur> 
  {
    return this.http.put<Utilisateur>(API_URL+'/utilisateur',utilisateur); 
  }

  public deleteUtilisateur( id : number) : Observable<void> 
  {
    return this.http.delete<void>(API_URL+`/utilisateur/${id}`); 
  }

}
