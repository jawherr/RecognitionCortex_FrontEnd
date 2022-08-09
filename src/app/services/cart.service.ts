import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {API_URL} from '../../environments/environment';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {UtilisateurService} from './utilisateur.service';
import {Cart} from '../models/cart';
import {Item} from '../models/item';
import {JwtResponse} from '../response/JwtResponse';
import {ProductInOrder} from '../models/productInOrder';
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
}; 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl = `${API_URL}/cart`;

    localMap = {};


    private itemsSubject: BehaviorSubject<Item[]>;
    private totalSubject: BehaviorSubject<number>;
    public items: Observable<Item[]>;
    public total: Observable<number>;


    private currentUtilisateur: JwtResponse;

    constructor(private http: HttpClient,
                private cookieService: CookieService,
                private utilisateurService: UtilisateurService) {
        this.itemsSubject = new BehaviorSubject<Item[]>(null);
        this.items = this.itemsSubject.asObservable();
        this.totalSubject = new BehaviorSubject<number>(null);
        this.total = this.totalSubject.asObservable();
        this.utilisateurService.currentUtilisateur.subscribe(utilisateur => this.currentUtilisateur = utilisateur);


    }

    private getLocalCart(): ProductInOrder[] {
        if (this.cookieService.check('cart')) {
            this.localMap = JSON.parse(this.cookieService.get('cart'));
            return Object.values(this.localMap);
        } else {
            this.localMap = {};
            return [];
        }
    }

    getCart(): Observable<ProductInOrder[]> {
        const localCart = this.getLocalCart();
        if (this.currentUtilisateur) {
            if (localCart.length > 0) {
                return this.http.post<Cart>(this.cartUrl, localCart).pipe(
                    tap(_ => {
                        this.clearLocalCart();
                    }),
                    map(cart => cart.products),
                    catchError(_ => of([]))
                );
            } else {
                return this.http.get<Cart>(this.cartUrl).pipe(
                    map(cart => cart.products),
                    catchError(_ => of([]))
                );
            }
        } else {
            return of(localCart);
        }
    }

    addItem(productInOrder): Observable<boolean> {
        if (!this.currentUtilisateur) {
            if (this.cookieService.check('cart')) {
                this.localMap = JSON.parse(this.cookieService.get('cart'));
            }
            if (!this.localMap[productInOrder.productId]) {
                this.localMap[productInOrder.productId] = productInOrder;
            } else {
                this.localMap[productInOrder.productId].count += productInOrder.count;
            }
            this.cookieService.set('cart', JSON.stringify(this.localMap));
            return of(true);
        } else {
            const url = `${this.cartUrl}/add`;
            return this.http.post<boolean>(url, {
                'quantity': productInOrder.count,
                'productId': productInOrder.productId
            });
        }
    }

    update(productInOrder: ProductInOrder): Observable<ProductInOrder> {

        if (this.currentUtilisateur) {
            const url = `${this.cartUrl}/${productInOrder.productId}`;
            return this.http.put<ProductInOrder>(url, productInOrder.count);
        }
    }


    remove(productInOrder: ProductInOrder) {
        if (!this.currentUtilisateur) {
            delete this.localMap[productInOrder.productId];
            return of(null);
        } else {
            const url = `${this.cartUrl}/${productInOrder.productId}`;
            return this.http.delete(url).pipe( );
        }
    }


    checkout(): Observable<any> {
        const url = `${this.cartUrl}/checkout`;
        return this.http.post(url, null).pipe();
    }

    storeLocalCart() {
        this.cookieService.set('cart', JSON.stringify(this.localMap));
    }

    clearLocalCart() {
        console.log('clear local cart');
        this.cookieService.delete('cart');
        this.localMap = {};
    }
}
