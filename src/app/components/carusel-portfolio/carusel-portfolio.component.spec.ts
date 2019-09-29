import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselPortfolioComponent } from './carusel-portfolio.component';

describe('CaruselPortfolioComponent', () => {
  let component: CaruselPortfolioComponent;
  let fixture: ComponentFixture<CaruselPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaruselPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruselPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
