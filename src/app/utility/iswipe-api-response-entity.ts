import { IEmployee } from "./iemployee";
import { ISwipe } from "./iswipe";

export interface ISwipeApiResponseEntity {

    firstSwipe: string;
    lastSwipe: string;
    actualWorkingHours: string;
    totalWorkingHours: string;
    totalTimeSpentOutside: string;
    remainingWorkingHours: string;
    endOfDayTime: string;


}
