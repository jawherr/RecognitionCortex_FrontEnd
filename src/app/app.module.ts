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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AchatComponent } from './components/achat/achat.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
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
    ProfilComponent,
    ClassementComponent,
    RecompenseComponent,
    MessagerieComponent,
    TodolistComponent,
    ParametresComponent,
    EquipeComponent,
    CommentaireComponent,
    DossierComponent,
    TacheComponent,
    BadgeComponent
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
    MatListModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
