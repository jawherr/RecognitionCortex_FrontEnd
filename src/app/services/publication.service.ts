import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from '../model/publication';

const API_URL = 'http://localhost:8090';
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(
    private http : HttpClient
  ) { }

  getPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(API_URL +'/publication',httpOptions);
  }

  addPublication(publication : Publication) : Observable<Publication> 
  {
    return this.http.post<Publication>(API_URL+'/publication',publication); 
  }

  getPublication(id : number) : Observable<Publication> 
  {
    return this.http.get<Publication>(API_URL+`/publication/${id}`,httpOptions) ;
  }

  public updatePublication(publication : Publication) : Observable<Publication> 
  {
    return this.http.put<Publication>(API_URL+'/publication',publication); 
  }

  public deletePublication( id : number) : Observable<void> 
  {
    return this.http.delete<void>(API_URL+`/publication/${id}`); 
  }

}
