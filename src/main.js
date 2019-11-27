import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'

// bootstrap.js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

let vueInstance = new Vue({
  el: '#app',
  data() {
    return {
      companyName: 'Endava',
      isDevWeek: true,
      talkList: [],
    };
  },
  methods: {
    increaseEvents() {
      this.talkList.push(['Charla de Vue']);
    },
    backToThePast() {
      this.companyName = 'Velocity Partners';
    },
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.companyName = this.companyName.split('').reverse().join('');
    },
  },
  computed: {
    getCompanyName: function () {
      // `this` points to the vm instance
      return this.companyName;
    },
    getAppStyles() {
      return {
        title: 'cursor: pointer',
        wrapper: 'height: 100%; display: flex; align-items: center;',
        content: 'width: 90%; height: 50vh; background: #efefef; padding: 15px;',
        content_inner: 'display: flex; flex-direction: column; justify-content: space-around;',
        event_list: 'font-size: 150%; font-weight: bold'
      }
    },
  },
  template: `
    <div class="app__wrapper container text-center" 
      :style="getAppStyles.wrapper">

      <div class="app__content row" 
        :style="getAppStyles.content">
        
        <div class="col-lg-12" 
          :style="getAppStyles.content_inner">

          <h1 :style="getAppStyles.title"
            @click="reversedMessage()">{{ getCompanyName }}</h1>
          <h2>¿Estamos en Dev Week? {{ isDevWeek }}</h2>
          <p class="app__event-list"
            :style="getAppStyles.event_list"
          >La lista de eventos es {{ talkList.length }}</p>
          
          <div class="app__buttons-container">
            <button
              type="button"
              class="btn btn-success"
              @click="increaseEvents"
            >Aumentar eventos</button>
            <button
              type="button"
              class="btn btn-danger"
              @click="backToThePast"
            >Volver al pasado</button>
          </div>

        </div>
      </div>
    </div>
    `
});

vueInstance.$mount();