import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentaire } from '../model/commentaire';
import { API_URL } from '../../environments/environment';

const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(
    private http : HttpClient
  ) { }

  getCommentaires(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(API_URL +'/commentaire',httpOptions);
  }

  addCommentaire(commentaire : Commentaire) : Observable<Commentaire> 
  {
    return this.http.post<Commentaire>(API_URL+'/commentaire',commentaire); 
  }

  getCommentaire(id : number) : Observable<Commentaire> 
  {
    return this.http.get<Commentaire>(API_URL+`/commentaire/${id}`,httpOptions) ;
  }

  public updateCommentaire(commentaire : Commentaire) : Observable<Commentaire> 
  {
    return this.http.put<Commentaire>(API_URL+'/commentaire',commentaire); 
  }

  public deleteCommentaire( id : number) : Observable<void> 
  {
    return this.http.delete<void>(API_URL+`/commentaire/${id}`); 
  }

}
