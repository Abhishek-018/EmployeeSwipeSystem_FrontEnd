import { Component, OnInit } from '@angular/core';
import { IApiResponseEntity } from 'src/app/utility/i-api-response-entity';
import { SwipeService } from 'src/app/utility/swipe.service';

@Component({
  selector: 'app-todays-timesheet',
  templateUrl: './todays-timesheet.component.html',
  styleUrls: ['./todays-timesheet.component.css']
})
export class TodaysTimesheetComponent implements OnInit {
  remianingWorkingHourDataResponse: any = {}; // Initialize with empty object
  endOfDayResponse: any = {};

  response: IApiResponseEntity = {} as IApiResponseEntity;
  constructor(private _swipeService:SwipeService) { }

  ngOnInit(): void {
    const sessionEmployeeId = sessionStorage.getItem('employeeId')!;
    const empId = parseInt(sessionEmployeeId);

    this._swipeService.getEmployeeRemainingWorkingHour(empId).subscribe({
      next : (data:IApiResponseEntity)=>{
        console.log("Remaining Working Hour : ",data);
        this.response = data;
        this.remianingWorkingHourDataResponse = this.response?.responseBody?.remainingWorkingHours;
      },

      error :(error:any)=>{
        console.log(error);

      }
    })

    this._swipeService.getEndOfDay(empId).subscribe({
      next : (data:IApiResponseEntity)=>{
        console.log("End Of Day  : ",data);
       
        this.response=data;
        this.endOfDayResponse= this.response?.responseBody?.endOfDayTime;
        
      },

      error :(error:any)=>{
        console.log(error);

      }
    })
  }

}
