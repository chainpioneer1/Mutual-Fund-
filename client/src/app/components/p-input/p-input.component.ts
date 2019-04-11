import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Input } from '@angular/core';
import * as _ from 'lodash';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  error: string;
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    if (control && control.invalid) {
      this.error = _.keys(control.errors).filter(key => control.errors[key])[0];
    }
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'p-input',
  templateUrl: './p-input.component.html',
  styles: ['mat-form-field{width: 100%;}']
})
export class PInputComponent implements OnInit {
  @Input() pFormControl: FormControl;
  @Input() pName: string;
  @Input() placeholder = '';
  @Input() hint = '';
  @Input() appearance = 'ouline';
  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
  }
}
