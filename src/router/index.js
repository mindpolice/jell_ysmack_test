import Vue from 'vue';
import VueRouter from 'vue-router';
import Characters from '../views/Characters';
import SelectedCharacter from '../views/SelectedCharacter';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/characters'
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters,
  },
  {
    path: '/characters/:id',
    name: 'Selected Character',
    component: SelectedCharacter,
    props: true
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const DEFAULT_TITLE = 'Test tech ';



router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    if(to.name === 'Selected Character') {
      document.title = DEFAULT_TITLE + '- ' + to.name;
    }
  });
});


export default router;
