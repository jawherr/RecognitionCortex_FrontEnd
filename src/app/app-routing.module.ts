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
import { CardComponent } from './components/card/card.component';
import { DetailComponent } from './components/product-detail/detail.component';
import { DefaultComponent } from './admin/layouts/default/default.component';
import { PostsComponent } from './admin/modules/posts/posts.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { UserAccountsComponent } from './components/user-accounts/user-accounts.component';
import { UsersComponent } from './components/users/users.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { OrderComponent } from './components/order/order.component';
import { AuthGuard } from './_guards/auth.guard';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { ProductListComponent } from './components/product-list/product.list.component';
import { Role } from './enum/Role';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { TeamsComponent } from './components/teams/teams.component';
import { BadgeParametreComponent } from './components/badge-parametre/badge-parametre.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  {path: 'admin',
  component: DefaultComponent,
  children: [{
    path: 'admin',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }]},
  { path: 'login', component: LoginComponent },
  { path: 'product/:id', component: DetailComponent },
  { path: 'category/:id', component: CardComponent },
  { path: 'product', component: CardComponent },
  { path: 'category', component: CardComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'publication', component: PublicationComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'cart', component: CartComponent },
  { path: 'badge', component: BadgeComponent },
  { path :"users", component : UsersComponent},
  { path :"teams", component : TeamsComponent},
  { path :"badge-parametre", component : BadgeParametreComponent},
  { path :"accounts", component : AccountsComponent},
  { path :"new-user", component : NewUserComponent},
  { path :"user-accounts/:id", component : UserAccountsComponent},
  { path: 'equipe', component: EquipeComponent },
  { path: 'add-post' ,component:AddPostComponent },
  { path : 'post/:id', component:PostComponent },
  { path: 'classement', component: ClassementComponent },
  { path: 'recompense', component: RecompenseComponent },
  { path: 'messagerie', component: MessagerieComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'parametres', component: ParametresComponent },
  { path: 'commentaire', component: CommentaireComponent },
  { path: 'order/:id', component: OrderDetailComponent, canActivate: [AuthGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'seller', redirectTo: 'seller/product', pathMatch: 'full' },
  {
        path: 'seller/product',
        component: ProductListComponent,
        canActivate: [AuthGuard],
        data: {roles: [Role.Fournisseur/*, Role.Employee*/]}
    },
    /*{
        path: 'profile',
        component: UtilisateurDetailComponent,
        canActivate: [AuthGuard]
    },*/
    {
        path: 'seller/product/:id/edit',
        component: ProductEditComponent,
        canActivate: [AuthGuard],
        data: {roles: [Role.Fournisseur/*, Role.Employee*/]}
    },
    {
        path: 'seller/product/:id/new',
        component: ProductEditComponent,
        canActivate: [AuthGuard],
        data: {roles: [Role.Fournisseur]}
    },

];

@NgModule({
  declarations: [],
    imports: [
        RouterModule.forRoot(routes)//{onSameUrlNavigation: 'reload'}
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
