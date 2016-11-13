import { describe } from 'ava-spec';
import totalPrice from '../src/total-price';

describe('module:total price', it => {
  it('base example', t => {
    const expected = 3;
    const actual = totalPrice();

    t.is(actual, expected);
  });
});

