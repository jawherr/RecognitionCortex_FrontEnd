import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AchatComponent } from './components/achat/achat.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {authInterceptorProviders } from './_helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PublicationComponent } from './components/publication/publication.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ClassementComponent } from './components/classement/classement.component';
import { RecompenseComponent } from './components/recompense/recompense.component';
import { MessagerieComponent } from './components/messagerie/messagerie.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ParametresComponent } from './components/parametres/parametres.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { CommentaireComponent } from './components/commentaire/commentaire.component';
import { DossierComponent } from './components/dossier/dossier.component';
import { TacheComponent } from './components/tache/tache.component';
import { BadgeComponent } from './components/badge/badge.component';
import { CardComponent } from './components/card/card.component';
import { DetailComponent } from './components/product-detail/detail.component';
import { PaginationComponent } from './components/parts/pagination/pagination.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavrhComponent } from './components/naverh/navrh.component';
import { BodyComponent } from './components/body/body.component';
import { DefaultModule } from './admin/layouts/default/default.module';
import {CookieService} from "ngx-cookie-service";
import { JwtInterceptor } from './_interceptors/jwt-interceptor.service';
import { ErrorInterceptor } from './_interceptors/error-interceptor.service';
import { CartComponent } from './components/cart/cart.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { UserAccountsComponent } from './components/user-accounts/user-accounts.component';
import { UsersComponent } from './components/users/users.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product.list.component';
import { TeamsComponent } from './components/teams/teams.component';
import { BadgeParametreComponent } from './components/badge-parametre/badge-parametre.component';

MatSelectModule
@NgModule({
  declarations: [
    AppComponent,
    AchatComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    PublicationComponent,
    SidenavComponent,
    ProfilComponent,
    CardComponent,
    OrderComponent,
    DetailComponent,
    PaginationComponent,
    ClassementComponent,
    RecompenseComponent,
    AccountsComponent,
    UserAccountsComponent,
    MessagerieComponent,
    TodolistComponent,
    ParametresComponent,
    EquipeComponent,
    CommentaireComponent,
    DossierComponent,
    TacheComponent,
    BadgeComponent,
    NavrhComponent,
    BodyComponent,
    CartComponent,
    UsersComponent,
    NewUserComponent,
    OrderDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    TeamsComponent,
    BadgeParametreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    DefaultModule,
    MatGridListModule
  ],
  providers: [CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
