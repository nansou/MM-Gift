import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

// require styles
require("./style/index.less");
import "./assets/css/normalize.css"
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
