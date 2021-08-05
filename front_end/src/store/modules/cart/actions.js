import axios from 'axios';
import dispatchNotification from '../../utils/notifications';

const actions = {
  getCartItems({ commit, dispatch }) {
    axios.get('/api/cart').then((response) => {
      commit('UPDATE_CART_ITEMS', response.data);
    }).catch((err) => {
      console.error(err);
      dispatchNotification.serverError(dispatch);
    });
  },
  addCartItem({ commit, dispatch }, cartItem) {
    axios.post('/api/cart', cartItem).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data);
      dispatch('addNotification', { message: `${cartItem.name} added to cart` }, { root: true });
    }).catch((err) => {
      console.error(err);
      dispatchNotification.serverError(dispatch);
    });
  },
  removeCartItem({ commit, dispatch }, cartItem) {
    axios.delete('/api/cart/delete/', { data: cartItem }).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data);
      dispatch('addNotification',
        { message: `${cartItem.name} removed  from cart`, type: 'info' },
        { root: true });
    }).catch((err) => {
      console.error(err);
      dispatchNotification.serverError(dispatch);
    });
  },
  removeAllCartItems({ commit }) {
    axios.delete('/api/cart/delete/all').then((response) => {
      commit('UPDATE_CART_ITEMS', response.data);
    }).catch((err) => {
      console.error(err);
      dispatchNotification.serverError(dispatch);
    });
  },

  submitCart({ dispatch }, cartContent) {
    axios.post('/api/orders', cartContent).then((response) => {
      if (response.status === 200) {
        dispatch('removeAllCartItems');
        dispatch('addNotification',
          { message: 'Order confirmed successfully', type: 'success', milliseconds: 3000 },
          { root: true });
      } else {
        dispatchNotification.apiError(dispatch);
      }
    }).catch((err) => {
      console.error(err);
      dispatchNotification.serverError(dispatch);
    });
  },
};

export default actions;
