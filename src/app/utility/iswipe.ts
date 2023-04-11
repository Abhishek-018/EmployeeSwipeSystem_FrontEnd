import { IEmployee } from "./iemployee";

export interface ISwipe {
    swipeId: number;
    swipeInTime: string;
    swipeOutTime: string;
    date:Date;
    employee:IEmployee;
}
