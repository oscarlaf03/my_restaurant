import { createStore } from 'vuex';
import product from './modules/product';
import cart from './modules/cart';
import order from './modules/order';

export default createStore({
  modules: {
    product,
    cart,
    order,
  },
});
