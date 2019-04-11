import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundsHeaderComponent } from './mutual-funds-header.component';

describe('MutualFundsHeaderComponent', () => {
  let component: MutualFundsHeaderComponent;
  let fixture: ComponentFixture<MutualFundsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualFundsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualFundsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
