import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { AuthGuard } from './auth-guard.service';


const appRoutes = [

  { path: 'home', component: HomeComponent },
  {
    path: 'servers', canActivate: [AuthGuard], component: ServersComponent,
    children: [
      { path: ':id/:name', component: EditServerComponent },
    ]
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'users', component: UsersComponent,
    children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
