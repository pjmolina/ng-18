import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, currency = 'EUR'): string {
    if (value === 0) {
      return '- €';
    }
    switch (currency.toUpperCase()) {
      case 'EUR':
        return value.toFixed(2).toString() + ' €';
      case 'USD':
        return '$ ' + value.toFixed(2).toString();
      default:
        return value.toFixed(2).toString() + ' ' + currency;
    }
  }
}
