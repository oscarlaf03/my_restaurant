import axios from 'axios';
import dispatchNotification from '../../utils/notifications';

const actions = {
  getCategories({commit, dispatch}) {
    axios.get('/api/categories').then((response) => {
      commit('UPDATE_AVAILABLE_CATEGORIES', response.data);
    }).catch(err =>{
      console.error(err);
      dispatchNotification.apiError(dispatch);
    });
  },
  toggleCategory( {commit}, category) {
    commit("TOGGLE_CATEGORY", category);
  }
}

export default actions;
