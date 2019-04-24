import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(dataArray: any[], sorter: string, sortDescending: boolean = true): any[] {
    dataArray.sort((first: any, second: any) => {
      if (first[sorter] > second[sorter]) {
        return sortDescending ? 1 : -1;
      } else if (first[sorter] < second[sorter]) {
        return sortDescending ? -1 : 1;
      } else {
        return 0;
      }
    });
    return dataArray;
  }
}
