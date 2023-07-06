import { Pipe, PipeTransform } from '@angular/core';
import { ServicedataService } from './servicedata.service';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipePipe implements PipeTransform {

  constructor(private dservice: ServicedataService) {}
  transform(items: any[], searchText: string): any[] {
    let errormesg = 'Record not found';
    searchText = searchText.toLowerCase();
    let rValue: any[] = [];
    if (!searchText) {
      return items;
    } else {
      items.filter((it: any) => {
        if (JSON.stringify(it).toLowerCase().toString().includes(searchText)) {
          rValue.push(it);
        } else {
          console.log('Record not found');
          errormesg;
          // alert('Record not found');
        }
      });
      this.dservice.seachPipeArray = rValue;
      return rValue;
    }
  }
}
