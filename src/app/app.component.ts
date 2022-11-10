import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  constructor(private translateService: TranslateService) {
    const browserLang: string = this.translateService.getBrowserLang()
      ? (this.translateService.getBrowserLang() as string)
      : 'en';
    this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
