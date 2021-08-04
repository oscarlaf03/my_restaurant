import axios from 'axios';

const state = {
  available_categories: [],
  selected_categories:[]
}

const mutations = {
  UPDATE_AVAILABLE_CATEGORIES(state,payload) {
    state.available_categories = payload;
  },
  TOGGLE_CATEGORY(state, category) {
    const included =  state.selected_categories.includes(category)
    if (included) {
      state.selected_categories = state.selected_categories.filter( c =>  c!=category)
    }else{
      state.selected_categories.push(category)
    }
  }
};

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

const getters = {
  available_categories: (state) => state.available_categories,
  selected_categories: (state) => state.selected_categories,

}

const categoryModule = {
  state,
  mutations,
  actions,
  getters
}

export default categoryModule;
