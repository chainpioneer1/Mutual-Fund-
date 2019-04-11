import { FilterType } from 'app/shared';
import { Component, SimpleChanges } from '@angular/core';
import { IFilterComponent } from '../ifilter';

@Component({
  selector: 'p-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent extends IFilterComponent {
  filterType = FilterType;
}
