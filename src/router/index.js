import Vue from 'vue';
import Router from 'vue-router';
import Lista from '@/components/Lista';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lista',
      component: Lista,
    },
  ],
});
