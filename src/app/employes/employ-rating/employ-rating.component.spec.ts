import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployRatingComponent } from './employ-rating.component';

describe('EmployRatingComponent', () => {
  let component: EmployRatingComponent;
  let fixture: ComponentFixture<EmployRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
