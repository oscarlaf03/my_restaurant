import axios from 'axios';
const actions = {
  getOrders({ commit }) {
    axios.get('/api/orders').then((response) => {
      commit('UPDATE_ORDERS', response.data);
    });
  },
};


export default actions;
