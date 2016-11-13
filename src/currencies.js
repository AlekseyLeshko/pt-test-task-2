let arr = [
  'rubles',
  'euros',
  'dollars',
  'pounds',
  'yens'
];

const currencies = arr.reduce((obj, item) => {
  obj[item] = item;
  return obj;
}, {});

export default currencies;
