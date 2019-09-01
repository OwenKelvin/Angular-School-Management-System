import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ErrorGuard } from './core/guards/error.guard';

import { HomeComponent } from './home/home.component';
import { Error404Component } from './errors/error404/error404.component';
import { LoginModule } from './login/login.module';
import { PathResolveService } from './core/services/path-resolve/path-resolve.service';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: '**',
    resolve: {
      path: PathResolveService
    },
    component: Error404Component,
  }
];

@NgModule({
  imports: [
    LoginModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
