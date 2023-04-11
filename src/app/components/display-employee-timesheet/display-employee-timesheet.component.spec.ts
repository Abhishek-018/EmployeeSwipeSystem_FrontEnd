import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmployeeTimesheetComponent } from './display-employee-timesheet.component';

describe('DisplayEmployeeTimesheetComponent', () => {
  let component: DisplayEmployeeTimesheetComponent;
  let fixture: ComponentFixture<DisplayEmployeeTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEmployeeTimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayEmployeeTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
