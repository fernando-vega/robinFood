import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { AuthService } from '../../../auth/services/auth.service';
import { StoreInterface } from '../../../core/interfaces/store.interface';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('.6s ease-out', 
                    style({ height: window.innerHeight, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: window.innerHeight, opacity: 1 }),
            animate('.6s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ProductListComponent implements OnInit {

  private titlePage = 'Pizzerías';
  public stores: StoreInterface[] = [];
  public store: any = '';
  public modalVisible: boolean = false;
  private images: string[] = ['pizza_1.png', 'pizza_2.png', 'pizza_3.png', 'pizza_4.png', 'pizza_5.png']

  constructor(
    public translate: TranslateService,
    private title: Title,
    private router: Router,
    private authService: AuthService,
    private dataService: DataService) { }


  ngOnInit(): void {
    this.title.setTitle(this.titlePage);
    this.getStores();
  }

  private getStores(): void {
    this.dataService.getInfo()
    .subscribe(resp => {
      this.stores = resp.response.stores;
      for (let i = 0 ; i < this.stores.length ; i++) {
        this.stores[i].image = this.images[i];
      }
    })
  }

  public logout(): void {
    this.router.navigateByUrl('/login')
    this.authService.logout()
  }

  public openDetails(id: number): void {
    this.store = this.stores.find(store => store.id === id);
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    this.modalVisible = true;
  }

  public closeModal(): void {
    document.getElementsByTagName('body')[0].style.overflowY = 'initial';
    this.modalVisible = false;
  }

}
