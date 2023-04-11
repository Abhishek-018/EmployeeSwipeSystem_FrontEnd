import { Component, OnInit } from '@angular/core';
import { SwipeService } from 'src/app/utility/swipe.service';

@Component({
  selector: 'app-display-employee-timesheet',
  templateUrl: './display-employee-timesheet.component.html',
  styleUrls: ['./display-employee-timesheet.component.css']
})
export class DisplayEmployeeTimesheetComponent implements OnInit {
  response: any;
  swipes: any[] = [];

  constructor(private _swipeService: SwipeService) { }
  

  ngOnInit(): void {
    var SessionSelectedDate = sessionStorage.getItem('selectedDate')!;
    console.log("This is SessionSelectedDate from DisplayEmployeeTimesheetComponent: ",typeof SessionSelectedDate);
    var SessionEmpId = sessionStorage.getItem('employeeId')!;
    console.log("This is SessionEmpId from DisplayEmployeeTimesheetComponent: ",SessionEmpId);
    var empId = parseInt(SessionEmpId);
    this._swipeService.getEmployeeSwipeRecordForDate(empId, SessionSelectedDate).subscribe({
      next: (data: any) => {
        this.response = data;
        console.log("EmpId from EmployeeTimesheet Component: ", empId)
        console.log("Swipe Records: ",this.response);
        this.swipes = data;

      },
      error: (error: any) => {

        console.log(error);

      }
    }
    );
    

  }

}
