const currencyReducers = {
  rubles: function(state, item) {
    return state.rubles += item.price / 0.7;
  },
  dollars: function(state, item) {
    return state.dollars += item.price / 1;
  },
  euros: function(state, item) {
    return state.euros += item.price / 1.1;
  },
  yens: function(state, item) {
    return state.yens += item.price / 1.2;
  },
  pounds: function(state, item) {
    return state.pounds += item.price / 1.3;
  }
};

export default currencyReducers;

