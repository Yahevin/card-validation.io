import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    card_number: '',
    month: '',
    year: '',
    cvc: '',
    email: '',
    form_filling: true,
    processed: false,
    pay_system: '',
    saved_cards: [],
    remember_card: false,
  },
  actions: {
    paySystem({commit}, value) {
      commit('PAY_SYSTEM', value)
    },
    deleteCard({commit}, index) {
      commit('DELETE_CARD', index)
    },
    pushCard({commit}, value) {
      commit('PUSH_CARD', value)
    },
    rememberCard({commit}, value) {
      commit('REMEMBER_CARD', value)
    },
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
    PAY_SYSTEM(state, value) {
      state.pay_system = value;
    },
    DELETE_CARD(state, index) {
      state.saved_cards.splice(index,1);
    },
    PUSH_CARD(state, value) {
      state.saved_cards.push(value);
    },
    REMEMBER_CARD(state, value) {
      state.remember_card = value;
    },
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
    CARD_SAVE(state, value) {
      state.email = value;
    },
  },
  getters: {
    saved_cards(state) {
      return state.saved_cards
    },
    remember_card(state) {
      return state.remember_card
    },
    pay_system(state) {
      return state.pay_system
    },
    processed(state) {
      return state.processed
    },
    form_filling(state) {
      return state.form_filling
    },
    card_number(state) {
      return state.card_number
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
