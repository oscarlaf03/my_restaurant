import { createRouter, createWebHashHistory } from 'vue-router';
import CartList from '../components/cart/Cart_List.vue';
import OrderList from '../components/order/Order_List.vue';
import Menu from '../components/core/Menu.vue';

const routes = [
  {
    path: '/menu',
    component: Menu,
  },
  {
    path: '/cart',
    component: CartList,
  },
  {
    path: '/',
    redirect: '/menu',
  },
  {
    path: '/orders',
    component: OrderList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
