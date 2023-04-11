import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwipeService } from 'src/app/utility/swipe.service';

@Component({
  selector: 'app-employee-timesheet',
  templateUrl: './employee-timesheet.component.html',
  styleUrls: ['./employee-timesheet.component.css']
})
export class EmployeeTimesheetComponent implements OnInit {
  currentDate = new Date();
  response: any;

  constructor(private _fb: FormBuilder, 
    private _swipeService: SwipeService, 
    private _router: Router,) { }

  registerForm: FormGroup = this._fb.group({

    selectedDate: ['', Validators.required],

  });



  ngOnInit(): void {
    


  }

  submitDate() {
    const date: string = this.registerForm.value.selectedDate;
    //console.log(typeof(this.registerForm.value.selectedDate));
    sessionStorage.setItem('selectedDate', date); 
    setTimeout(() => {
      this._router.navigate(['/displayEmployeeTimesheetComponent']);
    }, 1000);


    // var SessionEmpId = sessionStorage.getItem('employeeId');
    // console.log("data type of SessionEmpId: ", typeof (SessionEmpId));
    // console.log("This is this.registerForm.value.selectedDate: ", typeof (this.registerForm.value.selectedDate));
    // console.log("This is this.registerForm.value.selectedDate: ", this.registerForm.controls["selectedDate"].value);
    // if (SessionEmpId !== null) {
    //   var empId = parseInt(SessionEmpId);
    //   //console.log("EmpId from EmployeeTimesheet Component: ",empId)
    //   //var selectedDate = this.registerForm.value.selectedDate;
    //   //date: Date = new Date('2023-03-27');
    //   //const dateParam = this.date.toISOString().slice(0, 10); 
    //   //const dateParam = selectedDate.toISOString().slice(0, 10);
    //   const date: string = this.registerForm.value.selectedDate;
    //   sessionStorage.setItem('selectedDate', date); 
    //   console.log("typeof date: ", typeof (date), date);


    //   this._swipeService.getEmployeeSwipeRecordForDate(empId, date).subscribe({
    //     next: (data: any) => {
    //       this.response = data;
    //       console.log("EmpId from EmployeeTimesheet Component: ", empId)
    //       console.log(this.response);

    //     },
    //     error: (error: any) => {

    //       console.log(error);

    //     }
    //   }
    //   );
    // }


  }

}
