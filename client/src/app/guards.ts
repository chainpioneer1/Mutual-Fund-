import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { PassportCtrlService } from 'app/api/controllers/PassportCtrl';

@Injectable() export class Guard implements CanActivate {
  constructor(private _router: Router, private userService: PassportCtrlService) {
    // this.store.select(getIsAuthenticatedStateSelector).subscribe(state => {
    //   const data = state.data
    //   if (data){
    //     this._router.navigate(['/' + window.location.pathname.replace('mutualFunds/',''), {}]);
    //   }
    // });
  }
  canActivate() {
    return this.userService.isAuthenticated().map(user => {
      if (!user) {
        this._router.navigate(['/auth/login/mutualFunds']);
        return false;
      }

      return true;
    });
  }
}
