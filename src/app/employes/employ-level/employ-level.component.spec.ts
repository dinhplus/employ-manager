import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployLevelComponent } from './employ-level.component';

describe('EmployLevelComponent', () => {
  let component: EmployLevelComponent;
  let fixture: ComponentFixture<EmployLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
