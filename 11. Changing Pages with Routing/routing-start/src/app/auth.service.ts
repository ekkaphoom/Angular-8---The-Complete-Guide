export class AuthService {
  loginStatus: boolean;
  isAuthenticate(): Promise<boolean> {
    return new Promise((resolve, reject) => setTimeout(() => {
      return resolve(this.loginStatus);
    }, (1000)));
  }

  login() {
    this.loginStatus = true;
  }

  logout() {
    this.loginStatus = false;
  }
}
