import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    card_save: false,
    card_number: '',
    month: '',
    year: '',
    cvc: '',
    email: '',
    form_filling: true,
    processed: false,
  },
  actions: {
    cleanInputs({commit}) {
      commit('CLEAN_INPUTS')
    },
    processed({commit}, value) {
      commit('PROCESSED', value)
    },
    globalForm({commit}, value) {
      commit('GLOBAL_FORM', value)
    },
    setAction({commit}, value) {
      commit('SET_ACTION', value)
    },
    card_number({commit}, value) {
      commit('CARD_NUMBER', value)
    },
    save({commit}, value) {
      commit('CARD_SAVE', value)
    },
    month({commit}, value) {
      commit('SET_MONTH', value)
    },
    year({commit}, value) {
      commit('SET_YEAR', value)
    },
    cvc({commit}, value) {
      commit('SET_CVC', value)
    },
    email({commit}, value) {
      commit('SET_EMAIL', value)
    },
    
  },
  mutations: {
    CLEAN_INPUTS(state) {
      state.card_number ='';
      state.month ='';
      state.year ='';
      state.cvc ='';
      state.email ='';
      state.card_save = false;
    },
    PROCESSED(state, value) {
      state.processed = value;
    },
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
    processed(state) {
      return state.processed
    },
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
