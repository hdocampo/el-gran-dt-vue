import Vue from 'vue';
import App from './App.vue';

let vueInstance = new Vue({
  el: '#app',
  data() {
    return {
      companyName: 'Endava',
      isDevWeek: true,
      talkList: [],
    };
  },
  template: `
    <div class="checkbox-wrapper">
      <h1>{{ companyName }}</h1>
      <h2>¿Estamos en Dev Week? {{ isDevWeek }}</h2>
      <p>La lista de eventos es {{ talkList.length }}</p>
    </div>`
});

vueInstance.$mount();