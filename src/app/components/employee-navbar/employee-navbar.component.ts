import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/utility/employee.service';

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html',
  styleUrls: ['./employee-navbar.component.css']
})
export class EmployeeNavbarComponent implements OnInit {
  

  constructor(private _employeeService: EmployeeService, private _router: Router,) { }
  firstName:String = '';
  lastName: string = '';


  ngOnInit(): void {
    var SessionEmpId = sessionStorage.getItem('employeeId');
    if (SessionEmpId !== null) {
      var empId = parseInt(SessionEmpId);
      console.log("This is empId from EmployeeNavbarComponent: ", typeof empId, empId)
      this._employeeService.getEmployeeById(empId).subscribe(
        (data: any) => {
          console.log("This is getEmployeeById from EmployeeNavbarComponent: ", data);
            this.firstName = data.firstName;
            this.lastName = data.lastName;

        }

      );
    }
  }

  logout() {
    sessionStorage.clear();
    this._router.navigate(['/login']);
  }

}
