import { Component, OnInit, Input,ChangeDetectionStrategy } from '@angular/core';
import { ISelectComponent } from '../filters/ifilter';

@Component({
  selector: 'p-select',
  templateUrl: './p-select.component.html',
  styleUrls: ['./p-select.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PSelectComponent extends ISelectComponent {
  get selectedDic() {
    if (!this.selected) return {}
    if (!this.isMultiple) {
      const result = {};
      result[this.selected.id] = 1
      return result
    }
    return this.selected.reduce((prev, option, i) => {
      prev[option.id] = 1;
      return prev
    }, {})
  }
  _optionSelected(checked, option) {
    if (checked)
      this.optionSelected(option)
    else
      this.optionDeSelected(option)
  }
}
