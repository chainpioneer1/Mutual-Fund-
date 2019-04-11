import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-mutual-funds',
  templateUrl: './mutual-funds.component.html',
  styleUrls: ['./mutual-funds.component.scss']
})
export class MutualFundsComponent implements OnInit {
  dir = 'rtl';
  constructor(translate: TranslateService) {
    translate.setDefaultLang('he');
    translate.use('he');
  }

  ngOnInit() {
  }

}
