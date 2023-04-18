import { Component, OnInit } from '@angular/core';
import { ISwipeApiResponseEntity } from 'src/app/utility/iswipe-api-response-entity';
import { SwipeService } from 'src/app/utility/swipe.service';

@Component({
  selector: 'app-employee-timesheet',
  templateUrl: './employee-timesheet.component.html',
  styleUrls: ['./employee-timesheet.component.css']
})
export class EmployeeTimesheetComponent implements OnInit {
  
  response:any
  actualWorkingHoursData: ISwipeApiResponseEntity | undefined;
  totalWorkingHoursData:ISwipeApiResponseEntity | undefined;
  outTimeSpentData:ISwipeApiResponseEntity | undefined;
  sessionDate:string = '';
  constructor(private _swipeService:SwipeService) { }

  



  ngOnInit(): void {
    const sessionEmployeeId = sessionStorage.getItem('employeeId')!;
    const empId = parseInt(sessionEmployeeId);
    const sessionSelectedDate = sessionStorage.getItem('selectedDateForEmployeeTimesheet')!;
    this.sessionDate = sessionSelectedDate;

    
    this._swipeService.getActualWorkingHours(empId,sessionSelectedDate).subscribe({
      next: (data:ISwipeApiResponseEntity) =>{
        console.log("Actual Working Hours :",data);
        this.actualWorkingHoursData = data
        console.log(typeof this.actualWorkingHoursData.statusCode,this.actualWorkingHoursData.statusCode)

      },

      error: (error:any) =>{
        console.log(error)


      }
    });
    
    this._swipeService.getEmployeeTotalWorkingHours(empId,sessionSelectedDate).subscribe({
      next : (data:ISwipeApiResponseEntity) =>{
        console.log("Total Working Hours :",data);
        this.totalWorkingHoursData =data
      },

      error : (error:any)=>{
        console.log(error);
      }
    });

    this._swipeService.getEmployeeOutTime(empId,sessionSelectedDate).subscribe({
      next : (data:ISwipeApiResponseEntity)=>{
        console.log("Out Time: ",data);
        this.outTimeSpentData = data
      },

      error :(error:any)=>{
        console.log(error);

      }
    })


  }





}
