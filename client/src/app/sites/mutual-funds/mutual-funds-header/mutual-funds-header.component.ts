import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'p-mutual-funds-header',
  templateUrl: './mutual-funds-header.component.html',
  styleUrls: ['./mutual-funds-header.component.scss']
})
export class MutualFundsHeaderComponent implements OnInit {
  navMenus: any;
  tab: string;

  constructor() {
    this.tab = _.last(window.location.pathname.split('/'));
  }

  ngOnInit() {
    this.navMenus = [
      {
        icon: 'done',
        label: 'Menu 1',
      },
      {
        icon: 'done',
        label: 'Menu 2'
      },
      {
        icon: 'done',
        label: 'Menu 3',
      }
    ];
  }

}
