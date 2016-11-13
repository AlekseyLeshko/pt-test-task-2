import { describe } from 'ava-spec';
import totalPrice from '../src/total-price';

describe('module:total price', it => {
  it('get total price', t => {
    const selectedCart = [{
      price: 20
    }, {
      price: 45
    }, {
      price: 67
    }, {
      price: 1305
    }];

    const expected = {
      rubles: 1005.9,
      dollars: 1437,
      euros: 1580.7,
      yens: 1724.4,
      pounds: 1868.1
    };
    const actual = totalPrice(selectedCart);

    t.deepEqual(actual, expected);
  });
});

