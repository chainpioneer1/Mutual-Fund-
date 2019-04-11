import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {LoginComponent} from './login/login.component';
import {routing} from './authentication.routing';
import {ComponentsModule} from '../components/components.module'
import {LoginModule} from '../api/store/passport-ctrl/login/login.module'
import {LogoutModule} from '../api/store/passport-ctrl/logout/logout.module'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {TranslateModule} from '@ngx-translate/core'
@NgModule({
  imports : [
    routing, 
    RouterModule, 
    FormsModule,
    ReactiveFormsModule, 
    CommonModule,
    ComponentsModule,
    LoginModule,
    LogoutModule,
    StoreModule,
    EffectsModule,
    TranslateModule
  ],
  declarations : [
    LoginComponent
  ],
  providers : [
    AuthenticationService
  ]
})

export class AuthenticationModule {
}
