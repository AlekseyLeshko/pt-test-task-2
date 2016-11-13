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
      rubles: 1005.9, // 0.7
      dollars: 1437, // 1
      euros: 1580.7, // 1.1
      yens: 1724.4, // 1.2
      pounds: 1868.1 // 1.3
    };
    const actual = totalPrice(selectedCart);

    t.deepEqual(actual, expected);
  });
});

