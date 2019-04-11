import { MutualFundsSimulationComponent } from './mutual-funds-simulation/mutual-funds-simulation.component';
import { MutualFundsSearchComponent } from './mutual-funds-search/mutual-funds-search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MutualFundsComponent } from './mutual-funds.component';

const routes: Routes = [{
  path: '', component: MutualFundsComponent,
  children: [
    {
      path: '', redirectTo: 'search',
    },
    {
      path: 'search', component: MutualFundsSearchComponent
    },
    {
      path: 'simulation', component: MutualFundsSimulationComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MutualFundsRoutingModule { }
