import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8090/auth/' ;
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  
  username (username : string , password: string): Observable<any>
  {
    return this.http.post(AUTH_API+'signin',{
      username,password
    },httpOptions)
  }

  register (username : string, password : string) : Observable<any>
  {
    return this.http.post(AUTH_API+'signup',{
      username,password
    },httpOptions)
  }
}
