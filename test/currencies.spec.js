import {describe} from 'ava-spec';
import currencies from '../src/currencies';

describe('currencies:', it => {
  it('should return 5 currencies', t => {
    t.is(Object.keys(currencies).length, 5);
  });
});
