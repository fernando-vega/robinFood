import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BEST PIZZA';

  constructor(private translate: TranslateService) {}


  ngOnInit(): void {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }
}
