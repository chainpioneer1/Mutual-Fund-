import { Component, Input, SimpleChanges, SimpleChange, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ISelectComponent } from '../filters/ifilter';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteTrigger } from '@angular/material';

@Component({
  selector: 'p-autocomplete',
  templateUrl: './p-autocomplete.component.html',
  styleUrls: ['./p-autocomplete.component.scss']
})
export class PAutocompleteComponent extends ISelectComponent {
  @Input() appearance = 'outline'
  @Input() paths: string[] = ['name', 'id'];
  chips = false;
  searchControl = new FormControl();
  filteredOptions: Observable<any[]>;
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  @ViewChild(MatAutocompleteTrigger) trigger: MatAutocompleteTrigger;
  ngOnInit(): void {
    this.chips = this.isMultiple;
    if (!this.selected) this.selected = this.isMultiple ? [] : {}
    if (this.isMultiple && this.selected.length)
      this.options = this.options.filter(o => !this.selected.find(s => s.id == o.id))

      this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
      );

    this.searchControl.setValue(this.selected)
    //this.trigger.optionSelections.subscribe(d => super.optionSelected(d.source))
  }
  ngOnChanges(changes: SimpleChanges) {
    const options: SimpleChange = changes.options;
    if (options && JSON.stringify(options.previousValue) != JSON.stringify(options.currentValue)) {
      this.options.forEach(option => {
        option._query = this.paths.reduce((query, path) => query + ' ' + option[path], '')
      })
      if (this.searchInput) {
        setTimeout(() => {
          this.searchInput.nativeElement.value = '';
          this.searchControl.setValue('')
          if (this.options.length)
            this.trigger.openPanel();
          else
            this.searchInput.nativeElement.blur();
        }, 0)

      }
    }
  }
  @Input() displayFn = (val) => { return val ? val.name : '' }
  @Input() filter = (value: any): string[] => {
    if (!value || typeof value != "string") {
      return this.options;
    }

    const filterValue = ' ' + value.toLowerCase();
    return this.options.filter(option => option._query.toLowerCase().includes(filterValue));
  }

  optionSelected(val) {
    // if (this.isMultiple)
    //   this.options = this.options.filter(o => o.id != val.id)

    super.optionSelected(val);
  }

  optionDeSelected(val) {
    // if (this.isMultiple)
    //   this.options.push(val)
    super.optionDeSelected(val)
  }
}
