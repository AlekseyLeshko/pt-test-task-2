const currencyReducers = {
  rubles: function(state, item) {
    return state.rubles += item.price;
  },
  dollars: function(state, item) {
    return state.dollars += item.price / 71.6024;
  },
  euros: function(state, item) {
    return state.euros += item.price / 79.0133;
  },
  yens: function(state, item) {
    return state.yens += item.price / 0.6341;
  },
  pounds: function(state, item) {
    return state.pounds += item.price / 101.7829;
  }
};

export default currencyReducers;

