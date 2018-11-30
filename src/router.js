import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home'
import Questionnaire from './views/questionnaire'
import About from './views/About'
import Hobby from './views/Hobby'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        title: '卫宁在线实时考核'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '卫宁在线实时考核'
      }
    },{
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire,
      meta: {
        title: '认识卫宁'
      }
    },{
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '认识卫宁课件'
      }
    },{
      path: '/hobby',
      name: 'hobby',
      component: Hobby,
      meta: {
        title: '个人兴趣爱好'
      }
    }
  ],
});
