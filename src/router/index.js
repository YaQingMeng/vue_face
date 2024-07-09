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

export default router;
