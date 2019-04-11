import { Component, OnInit, Input } from '@angular/core';
import { IFilterComponent } from '../ifilter';
@Component({
  selector: 'p-quantity-filter',
  template: `
  <div fxLayout="column">
    <span>{{filter.name}}</span>
    <div fxFlex="100">
      <dx-range-selector [(value)]="filter.selected" [dataSource]="dataSource" >
      <dxo-scale>
        <dxo-label  [visible]="false">
        </dxo-label>
      </dxo-scale>
      <dxo-chart>
          <dxi-series argumentField="x" valueField="y"></dxi-series>
      </dxo-chart>
    </dx-range-selector>
    </div>
  </div>
  `,
  styles: []
})
export class QuantityFilterComponent extends IFilterComponent implements OnInit {
  dataSource: { x: number, y: number }[];
  ngOnInit() {
    this.dataSource = this.filter.options.map(f => ({ x: f[0], y: f[1] }));
    if (!this.filter.selected)
      this.filter.selected = [this.dataSource[0].x, this.dataSource[this.dataSource.length - 1].x];
  }
}
