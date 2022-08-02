import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../model/message';
import { API_URL } from '../../environments/environment';

const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http : HttpClient
  ) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(API_URL +'/message',httpOptions);
  }

  addMessage(message : Message) : Observable<Message> 
  {
    return this.http.post<Message>(API_URL+'/message',message); 
  }

  getMessage(id : number) : Observable<Message> 
  {
    return this.http.get<Message>(API_URL+`/message/${id}`,httpOptions);
  }

  public updateMessage(message : Message) : Observable<Message> 
  {
    return this.http.put<Message>(API_URL+'/message',message); 
  }

  public deleteMessage( id : number) : Observable<void> 
  {
    return this.http.delete<void>(API_URL+`message/${id}`);
  }

}
