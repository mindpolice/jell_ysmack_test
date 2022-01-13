import Vue from 'vue';
import VueRouter from 'vue-router';
import Characters from '../views/Characters';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'Characters',
    component: Characters,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
