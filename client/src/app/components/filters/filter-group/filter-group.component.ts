import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { IFilterGroup, FilterType, IFilter } from 'app/shared';
import { MatCheckboxChange } from '@angular/material';
@Component({
  selector: 'p-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss']
})
export class FilterGroupComponent implements OnInit {
  @Input()
  group: IFilterGroup;
  allCheck: boolean;
  isIndeterminate: boolean;

  ngOnInit() {
    this.updateGroupChecked();
  }

  /** handler for all check click */
  onAllCheck(event) {
    // stop tree effect
    event.stopPropagation();
  }

  /** handler for allCheck change */
  onAllCheckChange() {
    for (let i = 0; i < this.group.filters.length; i++) {
      this.group.filters[i].isActive = this.allCheck;
    }
  }

  /** handler for one check change */
  updateGroupChecked() {
    const selecteds = this.group.filters.filter(f => f.selected)
    this.allCheck = selecteds.length && !this.group.filters.find(f => f.selected && !f.isActive)
    this.isIndeterminate = !!this.group.filters.find(f => f.selected && f.isActive) && !this.allCheck;
  }

  groupClick() {
    this.updateGroupChecked();
    this.group.wrap = !this.group.wrap

  }
}
