import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeLogsComponent } from './swipe-logs.component';

describe('SwipeLogsComponent', () => {
  let component: SwipeLogsComponent;
  let fixture: ComponentFixture<SwipeLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
