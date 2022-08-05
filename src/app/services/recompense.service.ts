import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recompense } from '../models/recompense';
import { API_URL } from '../../environments/environment';

const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 

@Injectable({
  providedIn: 'root'
})
export class RecompenseService {

  constructor(
    private http : HttpClient
  ) { }

  getRecompenses(): Observable<Recompense[]> {
    return this.http.get<Recompense[]>(API_URL +'/recompense',httpOptions);
  }

  addRecompense(recompense : Recompense) : Observable<Recompense> 
  {
    return this.http.post<Recompense>(API_URL+'/recompense',recompense);
  }

  getRecompense(id : number) : Observable<Recompense> 
  {
    return this.http.get<Recompense>(API_URL+`/recompense/${id}`,httpOptions);
  }

  public updateRecompense(recompense : Recompense) : Observable<Recompense> 
  {
    return this.http.put<Recompense>(API_URL+'/recompense',recompense); 
  }

  public deleteRecompense( id : number) : Observable<void> 
  {
    return this.http.delete<void>(API_URL+`recompense/${id}`);
  }

}
