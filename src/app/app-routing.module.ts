import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeNavbarComponent } from './components/employee-navbar/employee-navbar.component';
import { EmployeeTimesheetComponent } from './components/employee-timesheet/employee-timesheet.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { SelectDateComponent } from './components/select-date/select-date.component';
import { SwipeLogsComponent } from './components/swipe-logs/swipe-logs.component';

const routes: Routes = [

  
    {path:"registrationForm", component:RegistrationPageComponent},
    {path:"login", component:LoginComponent},
    {path:"EmployeeNavbar",component:EmployeeNavbarComponent},
    {path:"selectDate",component:SelectDateComponent},
    {path:"swipeLogs",component:SwipeLogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
