import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponseEntity } from './i-api-response-entity';




@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private _httpClient:HttpClient) { }

  apiUrl:string="http://localhost:8080/add"
  
 


  registration(employee: any):Observable<IApiResponseEntity>
  {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._httpClient.post<IApiResponseEntity>(this.apiUrl, employee,{responseType: 'json'});
  }
}
