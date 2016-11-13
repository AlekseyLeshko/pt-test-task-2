const currencyReducers = {
  rubles: (state, item) => {
    return state.rubles += item.price / 0.7;
  },
  dollars: (state, item) => {
    return state.dollars += item.price / 1;
  },
  euros: (state, item) => {
    return state.euros += item.price / 1.1;
  },
  yens: (state, item) => {
    return state.yens += item.price / 1.2;
  },
  pounds: (state, item) => {
    return state.pounds += item.price / 1.3;
  }
};

export default currencyReducers;

