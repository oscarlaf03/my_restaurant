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

export default mutations;
