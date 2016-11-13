import { describe } from 'ava-spec';
import emptyPrice from '../src/empty-price';

describe('empty price:', it => {
  it('should include 5 elements and all element equals 0', t => {
    const values = Object.values(emptyPrice);
    t.is(values.length, 5);
    values.map((val) => t.is(val, 0));
  });
});

