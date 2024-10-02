import { CurrencyPipe } from './currency.pipe';

/**
 * Requisitos:
 * {{ importe | currency:'EUR' }}
 *
 * 123.459 EUR ->  123,46 €
 * 123.459 USD ->  $ 123,46
 * 0 EUR ->             - €
 *
 */
describe('CurrencyPipe', () => {
  it('should be instantiable', () => {
    const pipe = new CurrencyPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return 123,46 € when 123.459 EUR', () => {
    const sut = new CurrencyPipe();
    expect(sut.transform(123.459, 'EUR')).toEqual('123.46 €');
  });
  it('should return 123,46 € when 123.459 eur', () => {
    const sut = new CurrencyPipe();
    expect(sut.transform(123.459, 'eur')).toEqual('123.46 €');
  });
  it('should return $ 123,46 when 123.459 USD', () => {
    const sut = new CurrencyPipe();
    expect(sut.transform(123.459, 'USD')).toEqual('$ 123.46');
  });
  it('should return - € when 0 EUR', () => {
    const sut = new CurrencyPipe();
    expect(sut.transform(0, 'EUR')).toEqual('- €');
  });
});
