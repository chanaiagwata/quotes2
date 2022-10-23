import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let dateDifference = Math.abs(value-todayWithNoTime); //returns value in miliseconds
    let dateDifferenceInSec = dateDifference * 0.001 //converts dateDifference to seconds
    let secondsInDay = 86400; //60 sec *60 min *24 hrs in a day
    var dateCounter = dateDifferenceInSec / secondsInDay;

    if (dateCounter >= 1 && value> todayWithNoTime){
      return dateCounter
    }else{
      return 0;
    }
  }
}
