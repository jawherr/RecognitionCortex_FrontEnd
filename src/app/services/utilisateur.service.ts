import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';

const API_URL = 'http://localhost:8090';
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(
    private http : HttpClient
  ) { }

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
