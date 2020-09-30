// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//vuex1-引入
import Vuex from 'vuex';

//vuex2-添加到vue身上
Vue.use(Vuex);

//vuex3-声明store对象
const store = new Vuex.Store({
  strict: process.env.NODE_ENV != 'production',   //严格模式：防止直接修改state
  state: { a: 12, b: 5 },                         //核心：数据
  mutations: {
    add(state, n) {
      state.a += n;
    }
  },
  actions: {
    add({ commit }, n) {
      commit('add', n);
    }
  },
  getters: {},
  modules: {}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
