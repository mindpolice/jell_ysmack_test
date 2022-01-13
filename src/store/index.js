import Vue from 'vue';
import Vuex from 'vuex';

import Characters from './modules/character.store'


Vue.use(Vuex);



export default new Vuex.Store({
  modules: { Characters }
});
