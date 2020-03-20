import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    card_number: null,
    card_save: false,
    month: null,
    year: null,
    cvc: null,
    email: null,
    form_filling: true,
  },
  actions: {
    setAction({commit}, value) {
      commit('SET_ACTION', value)
    },
    cardNumber({commit}, value) {
      commit('CARD_NUMBER', value)
    },
    cardSave({commit}, value) {
      commit('CARD_SAVE', value)
    },
    setMonth({commit}, value) {
      commit('SET_MONTH', value)
    },
    setYear({commit}, value) {
      commit('SET_YEAR', value)
    },
    setCVC({commit}, value) {
      commit('SET_CVC', value)
    },
    setEmail({commit}, value) {
      commit('SET_EMAIL', value)
    },
    
  },
  mutations: {
    SET_ACTION(state, value) {
      state.form_filling = value;
    },
    CARD_NUMBER(state, value) {
      state.card_number = value;
    },
    CARD_SAVE(state, value) {
      state.card_save = value;
    },
    SET_MONTH(state, value) {
      state.month = value;
    },
    SET_YEAR(state, value) {
      state.year = value;
    },
    SET_CVC(state, value) {
      state.cvc = value;
    },
    SET_EMAIL(state, value) {
      state.email = value;
    },
  },
  getters: {
    form_filling(state) {
      return state.form_filling
    },
    card_number(state) {
      return state.card_number
    },
    card_save(state) {
      return state.card_save
    },
    month(state) {
      return state.month
    },
    year(state) {
      return state.year
    },
    cvc(state) {
      return state.cvc
    },
    email(state) {
      return state.email
    },
  },
  modules: {}
});
