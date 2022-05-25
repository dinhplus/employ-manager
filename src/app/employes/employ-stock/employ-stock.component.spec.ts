import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployStockComponent } from './employ-stock.component';

describe('EmployStockComponent', () => {
  let component: EmployStockComponent;
  let fixture: ComponentFixture<EmployStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
