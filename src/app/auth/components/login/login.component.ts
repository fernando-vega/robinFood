import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private titlePage = 'Login';
  public loggedIn: boolean = false;
  public user: UserInterface[] = [];
  public loginForm: FormGroup = this.fb.group({
    email:      ['', [Validators.required, Validators.email]],
    password:   ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    public translate: TranslateService,
    private title: Title,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.title.setTitle(this.titlePage);
  }

  public login(): void {
    const { email, password } = this.loginForm.value;
    this.authService.authenticationService(email, password);
    this.loggedIn = this.authService.loggedIn;
    this.authService.getSessionUser()
      .subscribe(res => {
        if(!res) {
          this.loggedIn = true;
        }
      })
  }
}
