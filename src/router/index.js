import Vue from 'vue';
import VueRouter from 'vue-router';
import Characters from '../views/Characters';
import SelectedCharacter from '../views/SelectedCharacter';

Vue.use(VueRouter);

// casting Numeral id to Number type
function castRouteParams(route) {
  return {
    id: Number(route.params.id),
  };
}

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
    props: castRouteParams
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
