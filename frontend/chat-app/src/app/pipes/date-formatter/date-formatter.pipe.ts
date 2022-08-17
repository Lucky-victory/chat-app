import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: string | number, timeFormat: string = 'hh:mm A', dateFormat: string='MMM D, YYYY'): string{
    const dateVal = moment(value);
    const dateDiff = moment().diff(dateVal, 'days');
    const time = moment(value).format(timeFormat);
    
    let transformedDate = '';
    if (dateDiff < 1) {
      transformedDate = time;
    }
    else if (dateDiff >= 1 && dateDiff < 2) {
      transformedDate = 'Yesterday '+ time
    }
    else {
      transformedDate=dateVal.format(`${dateFormat} ${timeFormat}`)
    }
    
    return transformedDate
  }

}
