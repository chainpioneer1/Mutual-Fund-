import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundsSearchComponent } from './mutual-funds-search.component';

describe('MutualFundsSearchComponent', () => {
  let component: MutualFundsSearchComponent;
  let fixture: ComponentFixture<MutualFundsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualFundsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualFundsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
