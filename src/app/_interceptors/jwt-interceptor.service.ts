import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import { UtilisateurService } from '../services/utilisateur.service';

@Injectable({
    providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {


    constructor(private utilisateurService: UtilisateurService,
    ) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUtilisateur = this.utilisateurService.currentUtilisateurValue;
        if (currentUtilisateur && currentUtilisateur.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${currentUtilisateur.type} ${currentUtilisateur.token}`,
                    'Content-Type': 'application/json'
                }
            });
        }
        return next.handle(request);
    }
}
