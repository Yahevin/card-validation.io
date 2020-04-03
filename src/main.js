//Styles
import '@/assets/styles/main.scss';

//Libraries
import Vue from "vue";
import VueMask from 'v-mask'
import VueBus from 'vue-bus';
import SvgSprite from 'vue-svg-sprite';

Vue.use(VueBus);
Vue.use(VueMask);
Vue.use(SvgSprite,{
  url: '/svg/sprite.svg',
});

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


// JS
import '@/assets/js/validation';
