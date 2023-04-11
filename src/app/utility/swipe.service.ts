import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISwipe } from './iswipe';

@Injectable({
  providedIn: 'root'
})
export class SwipeService {
  apiUrl:string="http://localhost:8080"
  constructor(private http:HttpClient) { }


  getEmployeeSwipeRecordForDate(employeeId:number,date:string):Observable<any[]>{
    const url = `${this.apiUrl}/getEmployeeSwipeRecordForDate?employeeId=${employeeId}&date=${date}`;
    return this.http.get<any[]>(url);
  }
}
