import axios from 'axios';

const state = {
  orders: [],
};

const mutations = {
  UPDATE_ORDERS(state, payload) {
    state.orders = payload;
  },
};

const actions = {
  getOrders({ commit }) {
    axios.get('/api/orders').then((response) => {
      commit('UPDATE_ORDERS', response.data);
    });
  },
};

const getters = {
  orders: (state) => state.orders,
};

const orderModule = {
  state,
  mutations,
  actions,
  getters,
};

export default orderModule;
