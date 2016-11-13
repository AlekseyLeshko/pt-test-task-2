import {describe} from 'ava-spec';
import exchangeRate from '../src/exchange-rate';

describe('exchange rate:', it => {
  it('should return 5 currencies with rate', t => {
    t.is(Object.keys(exchangeRate).length, 5);
    Object.values(exchangeRate).map((val) => t.not(val, 0));
  });
});

