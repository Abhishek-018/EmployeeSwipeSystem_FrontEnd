import { HttpStatusCode } from "@angular/common/http";

export interface IApiResponseEntity {
     message:String
     status:number
     statusCode:number;
     invalidInput: string[];
     responseBody:Object;
     
     

}
