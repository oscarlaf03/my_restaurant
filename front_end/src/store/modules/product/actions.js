import axios from 'axios';

const actions = {
  getProductItems({ commit }) {
    axios.get('/api/products').then((response) => {
      commit('UPDATE_PRODUCT_ITEMS', response.data);
    });
  },
};

export default actions;
