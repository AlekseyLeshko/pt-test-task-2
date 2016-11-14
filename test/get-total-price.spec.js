import { describe } from 'ava-spec';
import getTotalPrice from '../src/get-total-price';
import selectedCart from './fixtures/select-cards';

describe('get total price:', it => {
  it('should return total price for 4 carts', t => {
    const sum = selectedCart.reduce((sum, item) => {
      sum += item.price;
      return sum;
    }, 0);

    const expected = {
      rubles: sum / 0.7,
      dollars: sum / 1,
      euros: sum / 1.1,
      yens: sum / 1.2,
      pounds: sum / 1.3
    };

    const actual = getTotalPrice(selectedCart);

    t.deepEqual(actual, expected);
  });
});

