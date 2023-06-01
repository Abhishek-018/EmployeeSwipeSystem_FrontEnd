import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysTimesheetComponent } from './todays-timesheet.component';

describe('TodaysTimesheetComponent', () => {
  let component: TodaysTimesheetComponent;
  let fixture: ComponentFixture<TodaysTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysTimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
