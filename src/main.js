//Styles
import '@/assets/styles/main.scss';

//Libraries
import Vue from "vue";
import VueMask from 'v-mask'
import VueBus from 'vue-bus';
import SvgSprite from 'vue-svg-sprite';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

Vue.use(VueBus);
Vue.use(VueMask);
Vue.use(SvgSprite,{
  url: '/svg/sprite.svg',
});

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
  });
});


Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

//Templates
import Main from "@/assets/templates/Main.vue";


//Start Vue
Vue.config.productionTip = false;

new Vue({
  render: h => h(Main)
}).$mount("#app");


// Load svg sprite
function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('@/assets/img/icons/', true, /\.svg$/));
