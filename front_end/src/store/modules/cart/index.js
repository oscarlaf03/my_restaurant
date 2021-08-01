import axios from 'axios';

const state = {
  cartItems: [],
};

const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },
};

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
      console.log(commit, response, dispatch);
      if (response.status === 200) {
        dispatch('removeAllCartItems');
      } else {
        // TODO handle this
      }
    });
  },
};

const getters = {
  cartItems: (state) => state.cartItems,
  cartTotal: (state) => state.cartItems.reduce((acc, cartItem) => (cartItem.quantity * cartItem.price) + acc, 0).toFixed(2),
  cartQuantity: (state) => state.cartItems.reduce((acc, cartItem) => cartItem.quantity + acc, 0),
};

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;
