import axios from 'axios';

const actions = {
  getCartItems({ commit }) {
    axios.get('/api/cart').then((response) => {
      commit('UPDATE_CART_ITEMS', response.data);
    });
  },
  addCartItem({ commit }, cartItem) {
    axios.post('/api/cart', cartItem).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data);
    });
  },
  removeCartItem({ commit }, cartItem) {
    axios.delete('/api/cart/delete/', { data: cartItem }).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data);
    });
  },
  removeAllCartItems({ commit }) {
    axios.delete('/api/cart/delete/all').then((response) => {
      commit('UPDATE_CART_ITEMS', response.data);
    });
  },

  submitCart({ commit, dispatch }, cartContent) {
    axios.post('/api/orders', cartContent).then((response) => {

      if (response.status === 200) {
        dispatch('removeAllCartItems');
      } else {
        // TODO handle this make notification
        // console.error('my error at submit cart', 
      }
    }).catch(error => {
      console.log('error', error);
    });
  },
};

export default actions;
