import { createStore } from 'vuex';
import product from './modules/product';
import cart from './modules/cart';
import order from './modules/order';
import category from './modules/category';
import notification from './modules/notification';

export default createStore({
  modules: {
    product,
    cart,
    order,
    category,
    notification,
  },
});
