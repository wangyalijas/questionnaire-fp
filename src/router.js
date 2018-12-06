import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Questionnaire from './views/Questionnaire.vue';
import About from './views/About.vue';
import Hobby from './views/Hobby.vue';
import Success from './views/Success';
import CourseWareDetail from './views/CourseWareDetail'

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
        title: '卫宁在线实时考核',
      },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '卫宁在线实时考核',
      },
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire,
      meta: {
        title: '认识卫宁',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '认识卫宁课件',
      },
    },
    {
      path: '/hobby',
      name: 'hobby',
      component: Hobby,
      meta: {
        title: '个人兴趣爱好',
      },
    },
    {
      path: '/success',
      name: 'success',
      component: Success,
      meta: {
        title: '提交成功',
      },
    },
    {
      path: '/courseWareDetail',
      name: 'courseWareDetail',
      component: CourseWareDetail,
      meta: {
        title: '认识卫宁课件',
      },
    }
  ],
});
