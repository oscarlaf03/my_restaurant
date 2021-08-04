import axios from 'axios';

const actions = {
  getCategories({commit}) {
    axios.get('/api/categories').then((response) => {
      commit('UPDATE_AVAILABLE_CATEGORIES', response.data);
    });
  },
  toggleCategory( {commit}, category) {
    commit("TOGGLE_CATEGORY", category);
  }
}

export default actions;
