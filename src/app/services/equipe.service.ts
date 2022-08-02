import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from '../model/equipe';
import { API_URL } from '../../environments/environment';

const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(
    private http : HttpClient
  ) { }

  getEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(API_URL +'/equipe',httpOptions);
  }

  addEquipe(equipe : Equipe) : Observable<Equipe> 
  {
    return this.http.post<Equipe>(API_URL+'/equipe',equipe); 
  }

  getEquipe(id : number) : Observable<Equipe> 
  {
    return this.http.get<Equipe>(API_URL+`/equipe/${id}`,httpOptions);
  }

  public updateEquipe(equipe : Equipe) : Observable<Equipe> 
  {
    return this.http.put<Equipe>(API_URL+'/equipe',equipe); 
  }

  public deleteEquipe( id : number) : Observable<void> 
  {
    return this.http.delete<void>(API_URL+`/equipe/${id}`);
  }

}
