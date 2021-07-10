import Vue from "vue";
import App from "./App.vue";
import SimpleVueValidator from "simple-vue-validator";
import router from "./router";
import store from "./store";
import $axios from "./requests";

Vue.use(SimpleVueValidator, { mode: "manual" });

store.$axios = $axios;

new Vue({
  router,
  store,
  el: "#app-root",

  render: (h) => h(App),
});
