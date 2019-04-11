import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundsSimulationComponent } from './mutual-funds-simulation.component';

describe('MutualFundsSimulationComponent', () => {
  let component: MutualFundsSimulationComponent;
  let fixture: ComponentFixture<MutualFundsSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualFundsSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualFundsSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
