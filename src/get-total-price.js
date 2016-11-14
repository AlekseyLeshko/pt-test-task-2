import combine from './combine';
import currencyReducers from './currency-reducers';
import emptyPrice from './empty-price';

export default function(cards) {
  const reducers = combine(currencyReducers);
  const totalPrice = cards.reduce(reducers, emptyPrice);

  return totalPrice;
}

