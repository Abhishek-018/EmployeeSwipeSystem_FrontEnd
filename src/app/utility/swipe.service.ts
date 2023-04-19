import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponseEntity } from './i-api-response-entity';
import { ISwipe } from './iswipe';
import { ISwipeApiResponseEntity } from './iswipe-api-response-entity';

@Injectable({
  providedIn: 'root'
})
export class SwipeService {
  apiUrl:string="http://localhost:8080"
  constructor(private http:HttpClient) { }

  swipeIn(employeeId:number):Observable<IApiResponseEntity>{
    const url =`${this.apiUrl}/in?employeeId=${employeeId}`;
    return this.http.post<IApiResponseEntity>(url,{});
  }
  swipeOut(employeeId:number):Observable<IApiResponseEntity>{
    const url =`${this.apiUrl}/out?employeeId=${employeeId}`;
    return this.http.post<IApiResponseEntity>(url,{});
  }


  getEmployeeSwipeRecordForDate(employeeId:number,date:string):Observable<IApiResponseEntity>{
    const url = `${this.apiUrl}/getEmployeeSwipeRecordForDate?employeeId=${employeeId}&date=${date}`;
    return this.http.get<IApiResponseEntity>(url);
  }

  getActualWorkingHours(employeeId:number,date:string):Observable<IApiResponseEntity>{
    const url = `${this.apiUrl}/getEmployeesActualWorkingHours?employeeId=${employeeId}&date=${date}`;
    return this.http.get<IApiResponseEntity>(url);
  }


  getEmployeeTotalWorkingHours(employeeId:number,date:string):Observable<IApiResponseEntity>{
    const url =`${this.apiUrl}/getEmployeesTotalWorkingHours?employeeId=${employeeId}&date=${date}`;
    return this.http.get<IApiResponseEntity>(url);

  }

  getEmployeeOutTime(employeeId:number,date:string):Observable<IApiResponseEntity>{
    const url =`${this.apiUrl}/getEmployeeOutTime?employeeId=${employeeId}&date=${date}`;
    return this.http.get<IApiResponseEntity>(url);

  }


}
