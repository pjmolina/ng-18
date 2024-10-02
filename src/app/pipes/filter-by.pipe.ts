import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../dominio/user';

@Pipe({
  name: 'filterBy',
  standalone: true
})
export class FilterByPipe implements PipeTransform {
  transform(list: User[], searchString: string, property: string): User[] {
    if (searchString === '') {
      return list;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return list.filter((it: any) =>
      it[property].toLowerCase().includes(searchString.toLowerCase())
    );
  }
}
