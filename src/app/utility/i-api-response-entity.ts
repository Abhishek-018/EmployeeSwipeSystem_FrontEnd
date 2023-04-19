import { HttpStatusCode } from "@angular/common/http";

export interface IApiResponseEntity {
     message:String
     status:string
     statusCode:number;
     invalidInput: string[];
     responseBody:Object;
     
     

}
