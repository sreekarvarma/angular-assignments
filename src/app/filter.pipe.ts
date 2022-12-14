import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const filteredData = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        filteredData.push(item);
      }
    }
    return filteredData;
  }

}
