// Routes components
import Vue from 'vue';
import Router from 'vue-router';

import Contact from '../views/contact.vue'
import Products from '../views/products.vue'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/products',
    component: Products,
    name: 'Products'
  },
  { 
    path: '/contact', 
    component: Contact,
    name: 'Contact'
  }
]

Vue.use(Router);

export default new Router({
  routes
});

