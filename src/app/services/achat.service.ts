import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Achat } from '../models/achat';
import { API_URL } from 'src/environments/environment';

const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 

@Injectable({
  providedIn: 'root'
})
export class AchatService {

  constructor(
    private http : HttpClient
  ) { }

  getAchats(): Observable<Achat[]> {
    return this.http.get<Achat[]>(API_URL +'/achat',httpOptions);
  }

  addAchat(achat : Achat) : Observable<Achat> 
  {
    return this.http.post<Achat>(API_URL+'/achat',achat); 
  }

  getAchat(id : number) : Observable<Achat> 
  {
    return this.http.get<Achat>(API_URL+`/achat/${id}`,httpOptions);
  }

  public updateAchat(achat : Achat) : Observable<Achat> 
  {
    return this.http.put<Achat>(API_URL+'/achat',achat); 
  }

  public deleteAchat( id : number) : Observable<void> 
  {
    return this.http.delete<void>(API_URL+`/achat/${id}`); 
  }

}
