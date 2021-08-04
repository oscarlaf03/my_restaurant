import axios from 'axios';

const state = {
  available_categories: [],
  selected_categories:[]
}

const mutations = {
  UPDATE_AVAILABLE_CATEGORIES(state,payload) {
    state.available_categories = payload;
  },
  // ADD_SELECTED_CATEGORY(state,payload) {
  //   state.selected_categories.push (payload)
  // },
  // REMOVE_SELECTED_CATEGORY(state,payload) {
  //   state.selected_categories.filter( c =>  c!=payload)
  // },
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
      console.log('\n\n ****my data', response.data);
      commit('UPDATE_AVAILABLE_CATEGORIES', response.data);
    });
  },
  // addSelectedCategory({commit}, category) {
  //   commit('ADD_SELECTED_CATEGORY', category);
  // },
  // removeSelectedCategory( {commit}, category) {
  //   commit('REMOVE_SELECTED_CATEGORY', category);
  // },
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
