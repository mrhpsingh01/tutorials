import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    count: 0,
    colorCode: "green",
  },
  getters: {
    counterSquared(state) {
      return state.count * state.count;
    },
  },
  mutations: {
    decreaseCount(state, randomValue) {
      state.count -= randomValue;
    },
    increaseCount(state, randomValue) {
      state.count += randomValue;
    },
    setColorCode(state, newValue) {
      console.log(newValue);
      state.colorCode = newValue;
    },
  },
  actions: {
    decreaseCount({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      )
        .then((result) => {
          commit("decreaseCount", result.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    increaseCount({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      )
        .then((result) => {
          commit("increaseCount", result.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    setColorCode({ commit }, newValue) {
      commit("setColorCode", newValue);
    },
  },
  modules: {},
});
