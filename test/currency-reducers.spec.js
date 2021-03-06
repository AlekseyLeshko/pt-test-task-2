import { describe } from 'ava-spec';
import currencyReducers from '../src/currency-reducers';

describe('currency reducers:', it => {
  const state = {};

  it.beforeEach(() => {
    state.rubles = 0;
  });

  it('should convert dollars to rubles', t => {
    const expected = 20 / 0.7;
    const card = {
      price: 20
    };
    const actual = currencyReducers.rubles(state, card);

    t.is(actual, expected);
  });
});

