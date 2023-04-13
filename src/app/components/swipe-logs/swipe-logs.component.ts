import { Component, OnInit } from '@angular/core';
import { ISwipe } from 'src/app/utility/iswipe';
import { ISwipeApiResponseEntity } from 'src/app/utility/iswipe-api-response-entity';
import { SwipeService } from 'src/app/utility/swipe.service';

@Component({
  selector: 'app-swipe-logs',
  templateUrl: './swipe-logs.component.html',
  styleUrls: ['./swipe-logs.component.css']
})
export class SwipeLogsComponent implements OnInit {
  response: any;
  swipes: ISwipe[]  = [];

  constructor(private _swipeService: SwipeService) { }

  ngOnInit(): void {
    var SessionSelectedDate = sessionStorage.getItem('selectedDate')!;
    console.log("This is SessionSelectedDate from SwipeLogsComponent: ",typeof SessionSelectedDate,SessionSelectedDate);
    var SessionEmpId = sessionStorage.getItem('employeeId')!;
    console.log("This is SessionEmpId from SwipeLogsComponent: ",SessionEmpId);
    var empId = parseInt(SessionEmpId);
    this._swipeService.getEmployeeSwipeRecordForDate(empId, SessionSelectedDate).subscribe({
      next: (data:ISwipeApiResponseEntity) => {
        this.response = data;
        console.log("EmpId from SwipeLogsComponent Component: ", empId)
        console.log("Swipe Records: ",this.response);
        this.swipes = this.response.responseBody;
        console.log("this.swipes: ",this.swipes);

      },
      error: (error: any) => {

        console.log(error);

      }
    }
    );
    

  }

}
