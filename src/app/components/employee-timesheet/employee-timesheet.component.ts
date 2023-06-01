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

  response: IApiResponseEntity = {} as IApiResponseEntity;

  firstSwipe:any;
  lastSwipe:any;
  actualWorkingHoursData: any;
  totalWorkingHoursData:any;
  outTimeSpentData:any;
  remianingWorkingHourData:any;
  endOfDayData:any;
  sessionDate:string = '';



  constructor(private _swipeService:SwipeService) { 
 
  }

  



  ngOnInit(): void {
    const sessionEmployeeId = sessionStorage.getItem('employeeId')!;
    const empId = parseInt(sessionEmployeeId);
    const sessionSelectedDate = sessionStorage.getItem('selectedDateForEmployeeTimesheet')!;
    this.sessionDate = sessionSelectedDate;

    
    this._swipeService.getActualWorkingHours(empId,sessionSelectedDate).subscribe({
      next: (data:IApiResponseEntity) =>{
        console.log("Actual Working Hours :",data);
        this.response = data;
        this.actualWorkingHoursDataResponse = this.response.responseBody.actualWorkingHours;
        this.firstSwipe=this.response.responseBody.firstSwipe;
        this.lastSwipe=this.response.responseBody.lastSwipe;
        console.log("this.actualWorkingHours",this.actualWorkingHoursData)
        

      },

      error: (error:any) =>{
        console.log(error)


      }
    });
    
    this._swipeService.getEmployeeTotalWorkingHours(empId,sessionSelectedDate).subscribe({
      next : (data:IApiResponseEntity) =>{
        console.log("Total Working Hours :",data);
        this.response =data;
        this.totalWorkingHoursDataResponse = this.response.responseBody.totalWorkingHours;
      },

      error : (error:any)=>{
        console.log(error);
      }
    });

    this._swipeService.getEmployeeOutTime(empId,sessionSelectedDate).subscribe({
      next : (data:IApiResponseEntity)=>{
        console.log("Out Time: ",data);
        this.response = data;
        this.outTimeSpentDataResponse = this.response.responseBody.totalTimeSpentOutside;
      },

      error :(error:any)=>{
        console.log(error);

      }
    })

    


  }





}
