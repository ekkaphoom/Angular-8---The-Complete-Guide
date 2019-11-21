import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loginStatus: boolean;

  constructor() {
    this.loginStatus = false;
  }

  isAuthenticate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loginStatus);
      }, 100);

    });
  }

  login() {
    this.loginStatus = true;
  }
  logout() {
    this.loginStatus = false;
  }
}
