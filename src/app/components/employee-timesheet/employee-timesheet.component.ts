import { Component, OnInit } from '@angular/core';
import { IApiResponseEntity } from 'src/app/utility/i-api-response-entity';
import { SwipeService } from 'src/app/utility/swipe.service';

@Component({
  selector: 'app-employee-timesheet',
  templateUrl: './employee-timesheet.component.html',
  styleUrls: ['./employee-timesheet.component.css']
})
export class EmployeeTimesheetComponent implements OnInit {
  
  actualWorkingHoursDataResponse: any={}; // Initialize with empty object
  totalWorkingHoursDataResponse: any = {}; // Initialize with empty object
  outTimeSpentDataResponse: any = {}; // Initialize with empty object
  remianingWorkingHourDataResponse: any = {};
  response:any;


  actualWorkingHoursData: IApiResponseEntity | undefined;
  totalWorkingHoursData:IApiResponseEntity | undefined;
  outTimeSpentData:IApiResponseEntity | undefined;
  remianingWorkingHourData:IApiResponseEntity | undefined;
  endOfDayData:IApiResponseEntity | undefined;
  sessionDate:string = '';

  
  constructor(private _swipeService:SwipeService) { }

  



  ngOnInit(): void {
    const sessionEmployeeId = sessionStorage.getItem('employeeId')!;
    const empId = parseInt(sessionEmployeeId);
    const sessionSelectedDate = sessionStorage.getItem('selectedDateForEmployeeTimesheet')!;
    this.sessionDate = sessionSelectedDate;

    
    this._swipeService.getActualWorkingHours(empId,sessionSelectedDate).subscribe({
      next: (data:IApiResponseEntity) =>{
        console.log("Actual Working Hours :",data);
        this.actualWorkingHoursData = data;
        this.actualWorkingHoursDataResponse = this.actualWorkingHoursData.responseBody;
        console.log("this.actualWorkingHours",this.actualWorkingHoursData)
        console.log(typeof this.actualWorkingHoursData.status,this.actualWorkingHoursData.status)

      },

      error: (error:any) =>{
        console.log(error)


      }
    });
    
    this._swipeService.getEmployeeTotalWorkingHours(empId,sessionSelectedDate).subscribe({
      next : (data:IApiResponseEntity) =>{
        console.log("Total Working Hours :",data);
        this.totalWorkingHoursData =data;
        this.totalWorkingHoursDataResponse = this.totalWorkingHoursData.responseBody;
      },

      error : (error:any)=>{
        console.log(error);
      }
    });

    this._swipeService.getEmployeeOutTime(empId,sessionSelectedDate).subscribe({
      next : (data:IApiResponseEntity)=>{
        console.log("Out Time: ",data);
        this.outTimeSpentData = data;
        this.outTimeSpentDataResponse = this.outTimeSpentData.responseBody;
      },

      error :(error:any)=>{
        console.log(error);

      }
    })

    this._swipeService.getEmployeeRemainingWorkingHour(empId,sessionSelectedDate).subscribe({
      next : (data:IApiResponseEntity)=>{
        console.log("Remaining Working Hour : ",data);
        this.remianingWorkingHourData = data;
        this.remianingWorkingHourDataResponse = this.remianingWorkingHourData.responseBody;
      },

      error :(error:any)=>{
        console.log(error);

      }
    })

    this._swipeService.getEndOfDay(empId,sessionSelectedDate).subscribe({
      next : (data:IApiResponseEntity)=>{
        console.log("End Of Day  : ",data);
        this.endOfDayData = data;
        this.response = this.endOfDayData.responseBody;
        
      },

      error :(error:any)=>{
        console.log(error);

      }
    })


  }





}
