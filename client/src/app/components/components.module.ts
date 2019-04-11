import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModule } from './material/material.module';
import { PInputComponent } from './p-input/p-input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PNavMenuComponent } from './p-nav-menu/p-nav-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterComponent } from './filters/filter/filter.component';
import { SpecialAutocompleteFilterComponent } from './filters/special-autocomplete-filter/special-autocomplete-filter.component';
import { QuantityFilterComponent } from './filters/quantity-filter/quantity-filter.component';
import { PAutocompleteComponent } from './p-autocomplete/p-autocomplete.component';
import { PSelectComponent } from './p-select/p-select.component';
import { PDropdownComponent } from './p-dropdown/p-dropdown.component';
import { DxRangeSelectorModule } from 'devextreme-angular';
import { FilterGroupComponent } from './filters/filter-group/filter-group.component';

@NgModule({
  imports: [
    CommonModule,
    materialModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    FlexLayoutModule,
    DxRangeSelectorModule
  ],
  declarations: [PInputComponent, PNavMenuComponent, FilterComponent, QuantityFilterComponent,
    SpecialAutocompleteFilterComponent, PAutocompleteComponent, PSelectComponent,
     PDropdownComponent, FilterGroupComponent],
  exports: [PInputComponent, PNavMenuComponent, FlexLayoutModule, FilterComponent, QuantityFilterComponent,
    SpecialAutocompleteFilterComponent, PAutocompleteComponent, PSelectComponent,
    PDropdownComponent, FilterGroupComponent],
})
export class ComponentsModule { }
