import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationPipe',
})
export class LocationPipePipe implements PipeTransform {
  transform(items: any, term: any, prop: string): any {
    if (!term || !prop) return items;

    return items.filter((item: { [x: string]: { toString: () => string; }; }) =>
      item[prop].toString().toLowerCase().includes(term.toLowerCase())
    );
  }
}
