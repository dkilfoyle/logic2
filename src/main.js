import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

import VueKonva from "vue-konva";
Vue.use(VueKonva);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
