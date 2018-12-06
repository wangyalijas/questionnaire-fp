import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import RouterMixin from './mixins/router'
import http from './services/http/httpAxios';
import api from './services/api';
import LoadingMixin from './mixins/loading';

// import pdf from './components/pdf';
// Vue.use(pdf)

Vue.prototype.$api = api;
Vue.prototype.$http = http;
Vue.mixin(LoadingMixin);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
Vue.mixin(RouterMixin);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
