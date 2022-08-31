import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solde } from '../models/solde';
import { API_URL } from '../../environments/environment';

const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 

@Injectable({
  providedIn: 'root'
})
export class SoldeService {

  constructor(
    private http : HttpClient
  ) { }

  getSoldes(): Observable<Solde[]> {
    return this.http.get<Solde[]>(API_URL +'/solde',httpOptions);
  }

  addSolde(solde : Solde) : Observable<Solde> 
  {
    return this.http.post<Solde>(API_URL+'/solde',solde); 
  }SodleService

  getSolde(id : number) : Observable<Solde>
  {
    return this.http.get<Solde>(API_URL+`/solde/${id}`,httpOptions);
  }

  public updateSolde(solde : Solde) : Observable<Solde> 
  {
    return this.http.put<Solde>(API_URL+'/solde',solde); 
  }

  public deleteSolde(id : number) : Observable<void> 
  {
    return this.http.delete<void>(API_URL+`solde/${id}`);
  }

}
