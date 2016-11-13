import { describe } from 'ava-spec';
import emptyPrice from '../src/empty-price';

describe('empty price:', it => {
  it('default obj', t => {
    const values = Object.values(emptyPrice);
    t.is(values.length, 5);
    values.map((val) => t.is(val, 0));
  });
});

