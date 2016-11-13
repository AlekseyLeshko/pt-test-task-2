import currencies from './currencies';
import exchangeRate from './exchange-rate';

const curr = Object.keys(currencies).reduce((obj, currency) => {
  obj[currency] = (state, item) => {
    return state[currency] += item.price / exchangeRate[currency];
  };

  return obj;
}, {});

export default curr;

