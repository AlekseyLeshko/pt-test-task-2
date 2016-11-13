import currencies from './currencies';

function getEmptyPrice() {
  const emptyPrice = currencies;
  for (const prop in emptyPrice) {
    emptyPrice[prop] = 0;
  }

  return emptyPrice;
}

export default getEmptyPrice();

