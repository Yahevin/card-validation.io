import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import Vue from "vue";

const messages = {
  required: 'Введите {_field_}',
  min_value: 'Карта просрочена',
  min: 'Длина поля "год" 2 символа',
  between: 'Номер карты некорректен',
  length: 'Введите 3 символа в поле CVC'
};

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;

extend('expire', {
  params: ['target'],
  validate(value, { target }) {
    const year = (parseInt('20' + target));

    return year !== currentYear || year === currentYear && parseInt(value) >= currentMonth
  },
  message: 'Карта просрочена',
});

extend('luna',{
  validate(value) {
    let arr = [],
      card_number = value.toString();
    card_number = card_number.split(' ').join('');
    console.log(card_number);
    for(let i = 0; i < card_number.length; i++) {
      if(i % 2 === 0) {
        let m = parseInt(card_number[i]) * 2;
        if(m > 9) {
          arr.push(m - 9);
        } else {
          arr.push(m);
        }
      } else {
        let n = parseInt(card_number[i]);
        arr.push(n)
      }
    }
    let summ = arr.reduce(function(a, b) { return a + b; });
    return Boolean(!(summ % 10));
  },

  message: 'Номер карты некорректен',
});

Object.keys(rules).forEach(rule => {

  extend(rule, {
    ...rules[rule], // copies rule configuration

    message: messages.hasOwnProperty(rule) ? messages[rule] : '',
  });
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
