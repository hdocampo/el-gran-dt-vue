import Vue from 'vue';
import router from './router/'
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChartBar,
  faChevronCircleRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const iconsFA = [
  faChartBar,
  faChevronCircleRight
]

library.add(iconsFA);

// bootstrap.js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted: function() {
    console.log('Vue Router loaded successfully');
  }
});