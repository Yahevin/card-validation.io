//Styles
import '@/assets/styles/main.scss';

//Libraries
import Vue from "vue";
import VueBus from 'vue-bus';
import SvgSprite from 'vue-svg-sprite';
Vue.use(SvgSprite,{
  url: '/svg/sprite.svg',
});
Vue.use(VueBus);

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
