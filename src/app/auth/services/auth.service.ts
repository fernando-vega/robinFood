import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { WelcomeInterface } from 'src/app/core/interfaces/response.interface';
import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { DataService } from '../../core/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LOGGUED_EMAIL = 'authenticatedUser';
  public loggedIn: boolean = false;

  private apiUrl = `${environment.DATA_URL}`;
  public users: UserInterface[] = [];

  constructor(private httpClient: HttpClient, private router: Router, private dataService: DataService) { }

  public authenticationService(email: string, password: string): any {
    this.dataService.getInfo()
      .subscribe(resp => {
        this.users = resp.response.users;
        let _email = this.users.find(user => user.email === email);
        let _pass = this.users.find(user => user.password === password);
        if (_email && _pass) {
          this.loggedIn = true;
          this.registerSuccessfulLogin(email, password);
        }
      });
  }

  public getSessionUser(): Observable<boolean> {
    return of(this.loggedIn);
  }

  public registerSuccessfulLogin(email: string, password: string): void {
    localStorage.setItem(this.LOGGUED_EMAIL, email);
    this.router.navigateByUrl('/listado');
  }

  public validateSession(): Observable<boolean> {
    if (this.loggedIn || localStorage.getItem(this.LOGGUED_EMAIL)) {
      return of(true);
    } else {
      return of(false);
    }
  }

  public logout() {
    localStorage.removeItem(this.LOGGUED_EMAIL);
  }

}
