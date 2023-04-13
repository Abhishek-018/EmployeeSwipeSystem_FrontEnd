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


  getEmployeeSwipeRecordForDate(employeeId:number,date:string):Observable<ISwipeApiResponseEntity>{
    const url = `${this.apiUrl}/getEmployeeSwipeRecordForDate?employeeId=${employeeId}&date=${date}`;
    return this.http.get<ISwipeApiResponseEntity>(url);
  }
}
