import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeeNavbarComponent } from './components/employee-navbar/employee-navbar.component';
import { EmployeeTimesheetComponent } from './components/employee-timesheet/employee-timesheet.component';
import { SwipeLogsComponent } from './components/swipe-logs/swipe-logs.component';
import { SelectDateComponent } from './components/select-date/select-date.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    LoginComponent,
    EmployeeNavbarComponent,
    EmployeeTimesheetComponent,
    SwipeLogsComponent,
    SelectDateComponent,
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
