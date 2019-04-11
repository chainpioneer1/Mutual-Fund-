import {Injectable} from '@angular/core';
import {IFilterGroup} from 'app/shared';
import {defaultFilter, userFilters} from 'app/components/filters/test/funds.filter';
import {ReplaySubject} from 'rxjs';
import * as models from 'app/shared';

@Injectable({
  providedIn: 'root'
})
export class FundsService {
  constructor() {
    setTimeout(() => {
      const defaultFilters: { name: string, groups: IFilterGroup[] } = {name: 'ברירת מחדל', groups: defaultFilter};
      const allFilter: { name: string, groups: IFilterGroup[] }[] = [defaultFilters, ...userFilters];
      allFilter.forEach(f => f.groups.forEach(g => {
        g.filters = g.filters.map(f => Object.assign(new models[f.kind](), f));
      }));
      this.userFilters.next(allFilter);
      this.filterGroups.next(defaultFilters.groups);
    }, 100);
  }


  readonly filterGroups: ReplaySubject<IFilterGroup[]> = new ReplaySubject();
  readonly userFilters: ReplaySubject<{ name: string, groups: IFilterGroup[] }[]> = new ReplaySubject();
}
