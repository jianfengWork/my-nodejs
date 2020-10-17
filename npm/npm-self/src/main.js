import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// 引入插件
import vtitle from "npfeng-vtitle";
Vue.use(vtitle)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
