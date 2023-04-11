import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponseEntity } from './i-api-response-entity';
import { IEmployee } from './iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl:string =  'http://localhost:8080'

  constructor(private http:HttpClient) { }


  getEmployeeById(employeeId:number):Observable<IEmployee>{
    return this.http.get<IEmployee>(this.apiUrl+"/getEmployeeById/?employeeId="+employeeId,{responseType: 'json'})
  }
}
