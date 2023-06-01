import { HttpStatusCode } from "@angular/common/http";
import { ISwipeApiResponseEntity } from "./iswipe-api-response-entity";

export interface IApiResponseEntity {
     message:String
     status:string
     statusCode:number;
     invalidInput: string[];
     responseBody:ISwipeApiResponseEntity;
     
     

}
