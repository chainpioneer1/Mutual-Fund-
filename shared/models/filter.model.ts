import { Entity } from "./entity";

export interface IFilter extends Entity {
  options: any[];
  isMultiple?: boolean;
  isActive?: boolean;
  readonly title?: string;
  selected?: any;
}

export class BaseFilter extends Entity {
  get selected() {
    return this._selected;
   }
  set selected(value) {
    this._selected  = (value instanceof Array && !value.length)
    || !value || !Object.keys(value).length ? undefined : value;
    this.isActive = this._selected != undefined;
  }

  options: any[];
  private _selected?: any;
  isMultiple?: boolean;
  isActive?: boolean;

}
export class SelectFilter extends BaseFilter implements IFilter {
  get title() {
    if (!this.selected) { return; }
    if (this.selected instanceof Array) {
      return this.selected.map(o => o.name).join(",");
    }
    return this.selected.name;
  }
}

export class SelectboxFilter extends SelectFilter implements IFilter { }
export class AutocompleteFilter extends SelectFilter implements IFilter { }
export class DropdownFilter extends SelectFilter implements IFilter { }

export class QuantityFilter extends BaseFilter implements IFilter {
  get title() {
    if (!this.selected) { return; }
    return this.selected.join(",");
  }
}

export class SpecialFilter extends BaseFilter implements IFilter {
  get title() {
    if (!this.selected) { return; }
    return "not implemented";
  }
}

export class IFilterGroup {
  filters: IFilter[];
  name: string;
  wrap?: boolean;
  isActive?: boolean;
}