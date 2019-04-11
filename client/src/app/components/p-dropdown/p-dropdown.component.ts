import { Component, OnInit, Input } from '@angular/core';
import { ISelectComponent } from '../filters/ifilter';

@Component({
  selector: 'p-dropdown',
  templateUrl: 'p-dropdown.component.html',
  styles: []
})
export class PDropdownComponent extends ISelectComponent  implements OnInit {
  ngOnInit() {
  }

  compareFn(a, b) {
    return a && b && a.id == b.id;
  }
}
