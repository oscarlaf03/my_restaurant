import axios from 'axios';

const state = {
  available_categories: [],
  selected_categories:[]
}

const mutations = {
  UPDATE_AVAILABLE_CATEGORIES(state,payload) {
    state.available_categories = payload;
  }
};

const actions = {
  getCategories({commit}) {
    axios.get('/api/categories').then((response) => {
      commit('UPDATE_AVAILABLE_CATEGORIES', response.data);
    });
  }
}

const getters = {
  available_categories: (state) => state.available_categories
}

const categoryModule = {
  state,
  mutations,
  actions,
  getters
}

export default categoryModule;
