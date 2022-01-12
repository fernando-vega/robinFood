import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public isLogin: boolean = false;

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.getCurrentUrl();
  }

  private getCurrentUrl(): void {
    this.router.url === '/login' ? this.isLogin = true : this.isLogin = false;
  }

}
