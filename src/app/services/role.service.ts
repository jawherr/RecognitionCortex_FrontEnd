import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Role } from '../model/role';


const API_URL = 'http://localhost:8090';
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private http : HttpClient
  ) { }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(API_URL +'/role',httpOptions)
  }

  addRole(role : Role) : Observable<Role> 
  {
    return this.http.post<Role>(API_URL+'/role',role); 
  }

  getRole(id : number) : Observable<Role> 
  {
    return this.http.get<Role>(API_URL+`/role/${id}`,httpOptions) ;
  }

  public updateRole(role : Role) : Observable<Role> 
  {
    return this.http.put<Role>(API_URL+'/role',role); 
  }

  public deleteRole( id : number) : Observable<void> 
  {
    return this.http.delete<void>(API_URL+`/role/${id}`); 
  }
}
