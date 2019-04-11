import {Component, OnInit} from '@angular/core';
import {ISelectComponent} from '../ifilter';
import {IFilter} from 'app/shared';

@Component({
  selector: 'p-special-autocomplete-filter',
  templateUrl: './special-autocomplete-filter.component.html',
  styleUrls: ['./special-autocomplete-filter.component.scss']
})
export class SpecialAutocompleteFilterComponent extends ISelectComponent implements OnInit {
  allOptions: any[];
  _selected: any[];
  filter: IFilter;

  ngOnInit(): void {
    this.allOptions = this.options;
    this.setOptions(this.selected);
  }

  setOptions(current) {
    this._selected = [];
    this.filter = undefined;
    while (current && Object.keys(current).length) {
      if (this.options.length) {
        const id = +Object.keys(current)[0];
        const group = this.options.find(o => o.id == id);
        this._selected.push({id: id, name: group.name});
        if (group.filter) {
          if (!current[id]) {
            current[id] = {};
          }
          const filter = current[id];
          for (var member in group.filter) {
            filter[member] = group.filter[member];
          }
          this.filter = filter;
          this.options = [];
        } else {
          this.options = group.options;
        }
      }
      current = current[+Object.keys(current)[0]];
    }
  }

  onSelect(selects: any[]) {
    this.options = this.allOptions;
    let selected;
    for (let i = selects.length - 1; i >= 0; i--) {
      selected = {[selects[i].id]: selects};
    }

    this.selected = selected;
    this.selectedChange.emit(this.selected);
    this.setOptions(this.selected);
  }
}
