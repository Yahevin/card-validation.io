import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    val: null,
  },
  actions: {
    example({commit}, value) {
      commit('EXAMPLE', value)
    }
  },
  mutations: {
    EXAMPLE(state, value) {
      state.val = value;
    },
  },
  getters: {
    val(state) {
      return state.val
    },
  },
  modules: {}
});
