import { Component, OnInit } from '@angular/core';
import { IFilterGroup } from 'app/shared';
import { FundsService } from '../funds.service';

@Component({
  selector: 'p-mutual-funds-filter',
  templateUrl: './mutual-funds-filter.component.html',
  styleUrls: ['./mutual-funds-filter.component.scss']
})
export class MutualFundsFilterComponent implements OnInit {
  selected: { name: string, groups: IFilterGroup[] }
  groups: IFilterGroup[];
  userFilters: { name: string, groups: IFilterGroup[] }[];
  constructor(private service: FundsService) {
    this.service.filterGroups.subscribe(groups => this.groups = groups);
    this.service.userFilters.subscribe(filters => {
      this.userFilters = filters
      this.selected = filters[0]
    });
  }

  ngOnInit() {
  }

  filter = (value: any): any[] => {
    if (!value || typeof value != "string") {
      return this.userFilters;
    }

    return this.userFilters.filter(option => option.name.startsWith(value));
  }
}
