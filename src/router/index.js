// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/home/HomePage.vue';
import LoginPage from '../views/login/LoginPage.vue';
import TestPage from '../TestPage.vue';
import SignupPage from '../views/signup/SignupPage.vue';

const routes = [
  {
    path: '',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    meta: { requiresAuth: true }  // 添加元信息来标记需要认证的路由
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage,
  },
  {
    path: '/test',
    name: 'TestPage',
    component: TestPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function isLoggedIn() {
  const userinfo = JSON.parse(localStorage.getItem('userinfo'));
  return userinfo && userinfo.is_login === 1;
}


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 这个路由需要认证，请检查是否已登录
    if (!isLoggedIn()) {
      // 如果没有登录，重定向到登录页面
      next({
        path: '',
        query: { redirect: to.fullPath }
      });
    } else {
      // 已经登录，继续导航
      next();
    }
  } else {
    // 这个路由不需要认证，继续导航
    next();
  }
});

export default router;
