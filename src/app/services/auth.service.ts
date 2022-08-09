import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, catchError, Observable, of, Subject, tap } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { Utilisateur } from '../models/utilisateur';
import { JwtResponse } from '../response/JwtResponse';

const AUTH_API = 'http://localhost:8090/auth/' ;
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUtilisateurSubject: BehaviorSubject<JwtResponse>;
    public currentUtilisateur: Observable<JwtResponse>;
    public nameTerms = new Subject<string>();
    public name$ = this.nameTerms.asObservable();
    constructor(private http: HttpClient,
                private cookieService: CookieService) {
        const memo = localStorage.getItem('currentUtilisateur');
        this.currentUtilisateurSubject = new BehaviorSubject<JwtResponse>(JSON.parse(memo));
        this.currentUtilisateur = this.currentUtilisateurSubject.asObservable();
        cookieService.set('currentUtilisateur', memo);
    }

  get currentUtilisateurValue() {
    return this.currentUtilisateurSubject.value;
  }

  login (loginForm): Observable<any> {
    return this.http.post<JwtResponse>(AUTH_API+'signin',loginForm).pipe(
      tap(utilisateur => {
          if (utilisateur && utilisateur.token) {
              this.cookieService.set('currentUtilisateur', JSON.stringify(utilisateur));
              if (loginForm.remembered) {
                  localStorage.setItem('currentUtilisateur', JSON.stringify(utilisateur));
              }
              console.log((utilisateur.username));
              this.nameTerms.next(utilisateur.username);
              this.currentUtilisateurSubject.next(utilisateur);
              return utilisateur;
          }
      }),
      catchError(this.handleError('Login Failed', null))
    );
  }

  register (utilisateur: Utilisateur) : Observable<Utilisateur>
  {
    const url = `${API_URL}/signup`;
    return this.http.post<Utilisateur>(url, utilisateur);
  }
  logout() {
    this.currentUtilisateurSubject.next(null);
    localStorage.removeItem('currentUtilisateur');
    this.cookieService.delete('currentUtilisateur');
  }
  /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

        console.log(error); // log to console instead

        // Let the app keep running by returning an empty result.
        return of(result as T);
    };
}
}
