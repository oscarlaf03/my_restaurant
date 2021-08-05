import axios from 'axios';
import dispatchNotification from '../../utils/notifications';

const actions = {
  getProductItems({ commit, dispatch }) {
    axios.get('/api/products').then((response) => {
      commit('UPDATE_PRODUCT_ITEMS', response.data);
    }).catch((err) => {
      console.error(err);
      dispatchNotification.apiError(dispatch);
    });
  },
};

export default actions;
