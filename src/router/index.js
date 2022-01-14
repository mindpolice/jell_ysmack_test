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

  Vue.nextTick(() => {
      document.title = DEFAULT_TITLE + '- ' + to.name;

  });
});


export default router;
