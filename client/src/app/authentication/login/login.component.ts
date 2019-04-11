import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { LoginFormService } from '../../api/store/passport-ctrl/login/login.service'
import { Start } from '../../api/store/passport-ctrl/login/states/actions'
import { getLoginStateSelector } from '../../api/store/passport-ctrl/login/states/reducers'

interface AppState {
  user: any;
}

@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private _router: Router, private store: Store<AppState>, public form: LoginFormService) {

  }

  ngOnInit() {
    this.store.select(getLoginStateSelector).subscribe(state => {
      const data = state.data
      if (data) {
        this._router.navigate(['/' + window.location.pathname.replace('/auth/login/', ''), {}]);
      }
    });
  }

  ngOnDestroy() {

  }

  public login() {
    //this.store.dispatch(new Start({body:{userLogin:{ email:"yan@gmail.com", password:"123456"}}}));
    this.store.dispatch(new Start(this.form.form.value));
    // const user =  this.dataService.login(this.form.form.value).first();
    // if (this.form.valid) {
    //   this._router.navigate(['/' + window.location.pathname.replace('login/',''), {}]);
    //   // this._userService.login(this.form.value).subscribe(data => {
    //   //   if (this.lang !== "") {
    //   //     this._router.navigate([this.lang, {}]);
    //   //   }
    //   //   else{
    //   //     this._router.navigate(['/pages/dashboard', {}]);
    //   //   }
    //   // }, error => {
    //   //   this.show_error_message = true;
    //   //   this.error_message = 'אנא נסה שנית';
    //   //   this.show_spinner = false;
    //   // })
    // }
    // else {
    //   this.show_spinner = false;
    // }

  }
}