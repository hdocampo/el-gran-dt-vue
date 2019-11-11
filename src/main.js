import Vue from 'vue';
import router from './router/'
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue'

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted: function() {
    console.log('Vue Router loaded successfully');
  }
});