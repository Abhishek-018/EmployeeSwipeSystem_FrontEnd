import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayEmployeeTimesheetComponent } from './components/display-employee-timesheet/display-employee-timesheet.component';
import { EmployeeNavbarComponent } from './components/employee-navbar/employee-navbar.component';
import { EmployeeTimesheetComponent } from './components/employee-timesheet/employee-timesheet.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

const routes: Routes = [

  
    {path:"registrationForm", component:RegistrationPageComponent},
    {path:"login", component:LoginComponent},
    {path:"EmployeeNavbar",component:EmployeeNavbarComponent},
    {path:"employeeTimesheet",component:EmployeeTimesheetComponent},
    {path:"displayEmployeeTimesheetComponent",component:DisplayEmployeeTimesheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
