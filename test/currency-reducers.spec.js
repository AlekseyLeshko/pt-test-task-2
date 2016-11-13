import { describe } from 'ava-spec';
import currencyReducers from '../src/currency-reducers';

describe('module:currency reducers:', it => {
  const state = {};

  it.beforeEach(t => {
    state.rubles = 0;
  });

  it('rubles', t => {
    const expected = 20 / 0.7;
    const card = {
      price: 20
    };
    const actual = currencyReducers.rubles(state, card);

    t.is(actual, expected);
  });
});

