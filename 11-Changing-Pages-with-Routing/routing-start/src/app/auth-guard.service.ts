import { OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { AuthService } from './auth.service';

export class AuthGuard implements OnInit, CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticate().then(auth =>
      auth ? auth : this.router.navigate(['/']));
  }
}