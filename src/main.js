import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


// third party libraries imports
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles


// third party libraries usage
Vue.use(Vuesax, {
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
