import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISwipe } from './iswipe';
import { ISwipeApiResponseEntity } from './iswipe-api-response-entity';

@Injectable({
  providedIn: 'root'
})
export class SwipeService {
  apiUrl:string="http://localhost:8080"
  constructor(private http:HttpClient) { }

  swipeIn(employeeId:number):Observable<ISwipeApiResponseEntity>{
    const url =`${this.apiUrl}/in?employeeId=${employeeId}`;
    return this.http.post<ISwipeApiResponseEntity>(url,{});
  }
  swipeOut(employeeId:number):Observable<ISwipeApiResponseEntity>{
    const url =`${this.apiUrl}/out?employeeId=${employeeId}`;
    return this.http.post<ISwipeApiResponseEntity>(url,{});
  }


  getEmployeeSwipeRecordForDate(employeeId:number,date:string):Observable<ISwipeApiResponseEntity>{
    const url = `${this.apiUrl}/getEmployeeSwipeRecordForDate?employeeId=${employeeId}&date=${date}`;
    return this.http.get<ISwipeApiResponseEntity>(url);
  }

  getActualWorkingHours(employeeId:number,date:string):Observable<ISwipeApiResponseEntity>{
    const url = `${this.apiUrl}/getEmployeesActualWorkingHours?employeeId=${employeeId}&date=${date}`;
    return this.http.get<ISwipeApiResponseEntity>(url);
  }


  getEmployeeTotalWorkingHours(employeeId:number,date:string):Observable<ISwipeApiResponseEntity>{
    const url =`${this.apiUrl}/getEmployeesTotalWorkingHours?employeeId=${employeeId}&date=${date}`;
    return this.http.get<ISwipeApiResponseEntity>(url);

  }

  getEmployeeOutTime(employeeId:number,date:string):Observable<ISwipeApiResponseEntity>{
    const url =`${this.apiUrl}/getEmployeeOutTime?employeeId=${employeeId}&date=${date}`;
    return this.http.get<ISwipeApiResponseEntity>(url);

  }


}
