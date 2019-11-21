import { OnInit, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

Injectable();
export class AuthGuard implements OnInit, CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    return this.authService.isAuthenticate().then(auth => {
      if (auth) {
        return auth;
      } else {
        this.route.navigate(['/']);
        return false;
      }
    });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
