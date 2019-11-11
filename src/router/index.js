// Routes components
import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  }
]

Vue.use(Router);

export default new Router({
  routes
});

