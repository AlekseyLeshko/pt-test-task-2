export default function(reducers) {
  return function(state, card) {
    return Object.keys(reducers).reduce(function(prevState, currency) {
      reducers[currency](state, card);
      return state;
    }, {});
  }
};

