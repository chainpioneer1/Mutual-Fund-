import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IFilter } from 'app/shared';

export class IFilterComponent {
  @Input()
  filter: IFilter;
}

export class ISelectComponent {
  @Output() selectedChange = new EventEmitter();
  @Input() placeholder: string;
  @Input()
  selected:any;

  @Input()
  options: any[];

  @Input()
  isMultiple;

  optionSelected(val) {
    if (this.isMultiple) {
      if (!this.selected) { this.selected = []; }
      this.selected.push(val);
    }
    else
      this.selected = val;
    this.selectedChange.emit(this.selected);
  }

  optionDeSelected(val) {
    this.selected = this.selected.filter(s => s.id !== val.id);
    this.selectedChange.emit(this.selected);
  }
}
