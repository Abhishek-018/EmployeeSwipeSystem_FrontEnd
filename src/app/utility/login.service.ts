import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponseEntity } from './i-api-response-entity';
import { IEmployee } from './iemployee';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl:string =  'http://localhost:8080'

  constructor(private http:HttpClient) { }

  login(employee:IEmployee):Observable<IApiResponseEntity>{
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };
    return this.http.post<IApiResponseEntity>(this.apiUrl+"/login",employee);
  }
}
