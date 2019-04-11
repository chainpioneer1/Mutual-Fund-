import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Guard } from './guards';
const appRoutes: Routes = [
  {
    path: 'mutualFunds',
    canActivate: [Guard],
    loadChildren: './sites/mutual-funds/mutual-funds.module#MutualFundsModule',
  },
  {
    path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  { path: '', redirectTo: 'mutualFunds', canActivate: [Guard], pathMatch: 'full', },
  // { path: '**', redirectTo: 'mutualFunds',canActivate: [guard], }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
