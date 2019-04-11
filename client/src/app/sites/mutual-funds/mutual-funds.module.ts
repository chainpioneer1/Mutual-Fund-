import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { MutualFundsRoutingModule } from './mutual-funds-routing.module';
import { MutualFundsComponent } from './mutual-funds.component';
import { MutualFundsHeaderComponent } from './mutual-funds-header/mutual-funds-header.component';
import { materialModule } from '../../components/material/material.module';
import { MutualFundsSearchComponent } from './mutual-funds-search/mutual-funds-search.component';
import { MutualFundsSimulationComponent } from './mutual-funds-simulation/mutual-funds-simulation.component';
import { MutualFundsFilterComponent } from './mutual-funds-filter/mutual-funds-filter.component';

@NgModule({
  imports: [
    CommonModule,
    materialModule,
    ComponentsModule,
    MutualFundsRoutingModule,
    TranslateModule
  ],
  declarations: [
    MutualFundsComponent,
    MutualFundsHeaderComponent,
    MutualFundsSearchComponent,
    MutualFundsSimulationComponent,
    MutualFundsFilterComponent],
  bootstrap: [MutualFundsComponent]
})
export class MutualFundsModule { }
