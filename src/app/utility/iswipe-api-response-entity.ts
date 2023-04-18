import { IEmployee } from "./iemployee";
import { ISwipe } from "./iswipe";

export interface ISwipeApiResponseEntity {

    message:string;
    status:number;
    statusCode:number;
    firstSwipe: string;
    lastSwipe: string;
    employee:IEmployee;
    responsebody:ISwipe[];

}
