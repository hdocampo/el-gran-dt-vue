import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'

// bootstrap.js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import TestComponent from './components/test-component.vue';

Vue.use(BootstrapVue);

let vueInstance = new Vue({
  el: '#app',
  data() {
    return {
      companyName: 'Endava',
      isDevWeek: true,
      talkList: [],
      newEvent: ''
    };
  },
  components: {
    TestComponent
  },
  methods: {
    backToThePast() {
      this.companyName = 'Velocity Partners';
    },
    backToThePresent() {
      this.companyName = 'Endava';
    },
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.companyName = this.companyName.split('').reverse().join('');
    },
    addNewEvent() {
      this.talkList.push(this.newEvent);
      this.newEvent = '';
    }
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
            @click="reversedMessage">{{ getCompanyName }}</h1>
          <h2>¿Estamos en Dev Week? {{ isDevWeek ? 'Sí claro' : 'No!' }}</h2>
          <p class="app__event-list"
            :style="getAppStyles.event_list"
          >La lista de eventos es {{ talkList.length }}</p>

          <div class="row">
            <div class="col-lg-6 offset-lg-3 p-3">
              <input class="form-control col-lg-8 float-left" 
                placeholder="Agregate un evento!"
                type="text=" v-model="newEvent" />
              <button
                type="button"
                class="btn btn-primary col-lg-3 float-right"
                @click="addNewEvent"
              >Agregar</button>
              <div class="clearfix"></div>
              <p class="col-lg-12 p-3">{{ newEvent }}</p>
            </div>
          </div>
          
          <div class="app__buttons-container">
            <button
              type="button"
              class="btn btn-danger"
              @click="backToThePast"
              :disabled="companyName === 'Velocity Partners'"
            >Volver al pasado</button>
            <button
              type="button"
              class="btn btn-success"
              @click="backToThePresent"
              :disabled="companyName === 'Endava'"
            >Volver al pasado</button>
          </div>

          <test-component />

        </div>
      </div>
    </div>
    `
});

vueInstance.$mount();