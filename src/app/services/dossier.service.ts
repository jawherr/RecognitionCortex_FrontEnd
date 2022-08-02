import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dossier } from '../model/dossier';
import { API_URL } from '../../environments/environment';

const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 

@Injectable({
  providedIn: 'root'
})
export class DossierService {

  constructor(
    private http : HttpClient
  ) { }

  getDossiers(): Observable<Dossier[]> {
    return this.http.get<Dossier[]>(API_URL +'/dossier',httpOptions);
  }

  addDossier(dossier : Dossier) : Observable<Dossier> 
  {
    return this.http.post<Dossier>(API_URL+'/dossier',dossier); 
  }

  getDossier(id : number) : Observable<Dossier> 
  {
    return this.http.get<Dossier>(API_URL+`/dossier/${id}`,httpOptions);
  }

  public updateDossier(dossier : Dossier) : Observable<Dossier> 
  {
    return this.http.put<Dossier>(API_URL+'/dossier',dossier); 
  }

  public deleteDossier( id : number) : Observable<void> 
  {
    return this.http.delete<void>(API_URL+`/dossier/${id}`);
  }

}
