import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseDateComponent } from './components/choose-date/choose-date.component';
import { EmployeeNavbarComponent } from './components/employee-navbar/employee-navbar.component';
import { EmployeeTimesheetComponent } from './components/employee-timesheet/employee-timesheet.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { SelectDateComponent } from './components/select-date/select-date.component';
import { SwipeLogsComponent } from './components/swipe-logs/swipe-logs.component';
import { AuthGuardService } from './utility/auth-guard.service';

const routes: Routes = [

  
    {path:"registrationForm", component:RegistrationPageComponent},
    {path:"login", component:LoginComponent},
    {path:"EmployeeNavbar",component:EmployeeNavbarComponent,canActivate: [AuthGuardService]},
    {path:"selectDate",component:SelectDateComponent,canActivate: [AuthGuardService]},
    {path:"swipeLogs",component:SwipeLogsComponent,canActivate: [AuthGuardService]},
    {path:"employeeTimesheet",component:EmployeeTimesheetComponent,canActivate: [AuthGuardService]},
    {path:"chooseDate",component:ChooseDateComponent,canActivate: [AuthGuardService]},
    {path: "home",component:HomeComponent,canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService] 
})
export class AppRoutingModule { 
  
}
