import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './components/badge/badge.component';
import { ClassementComponent } from './components/classement/classement.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MessagerieComponent } from './components/messagerie/messagerie.component';
import { ParametresComponent } from './components/parametres/parametres.component';
import { ProfilComponent } from './components/profil/profil.component';
import { PublicationComponent } from './components/publication/publication.component';
import { RecompenseComponent } from './components/recompense/recompense.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { CommentaireComponent } from './components/commentaire/commentaire.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'publication', component: PublicationComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'classement', component: ClassementComponent },
  { path: 'recompense', component: RecompenseComponent },
  { path: 'messagerie', component: MessagerieComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'parametres', component: ParametresComponent },
  { path: 'commentaire', component: CommentaireComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
