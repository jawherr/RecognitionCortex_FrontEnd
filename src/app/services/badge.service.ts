import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Badge } from '../models/badge';
import { API_URL } from '../../environments/environment';

const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  constructor(
    private http : HttpClient
  ) { }

  getBadges(): Observable<Badge[]> {
    return this.http.get<Badge[]>(API_URL +'/badge',httpOptions);
  }

  addBadge(badge : Badge) : Observable<Badge> 
  {
    return this.http.post<Badge>(API_URL+'/badge',badge); 
  }

  getBadge(id : number) : Observable<Badge> 
  {
    return this.http.get<Badge>(API_URL+`/badge/${id}`,httpOptions);
  }

  public updateBadge(badge : Badge) : Observable<Badge> 
  {
    return this.http.put<Badge>(API_URL+'/badge',badge); 
  }

  public deleteBadge( id : number) : Observable<void> 
  {
    return this.http.delete<void>(API_URL+`/badge/${id}`); 
  }

}
