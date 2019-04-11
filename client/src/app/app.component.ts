import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'p-root',
  template: `
 <router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'Praedicta';
  constructor(translate: TranslateService) {
    translate.setDefaultLang('he');
    translate.use('he');
  }
}
