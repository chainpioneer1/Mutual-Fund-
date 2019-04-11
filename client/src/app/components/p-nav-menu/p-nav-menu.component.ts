import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'p-nav-menu',
  templateUrl: './p-nav-menu.component.html',
  styleUrls: ['./p-nav-menu.component.scss']
})
export class PNavMenuComponent implements OnInit {

  @Input() items: any;
  itemss: any;
  constructor() { }

  ngOnInit() {
    // this.items = [
    //   {
    //     icon: 'done',
    //     label: 'Menu 1',
    //   },
    //   {
    //     icon: 'done',
    //     label: 'Menu 2'
    //   },
    //   {
    //     icon: 'done',
    //     label: 'Menu 3',
    //   }
    // ];
  }

}
