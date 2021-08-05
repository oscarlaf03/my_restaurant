import axios from 'axios';
import dispatchNotification from '../../utils/notifications';

const actions = {
  getOrders({ commit, dispatch }) {
    axios.get('/api/orders').then((response) => {
      commit('UPDATE_ORDERS', response.data);
    }).catch((err) => {
      console.error(err);
      dispatchNotification.apiError(dispatch);
    });
  },
};

export default actions;
