import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
export const routing = RouterModule.forChild([
  { path: 'login/:site', component: LoginComponent},
]);
