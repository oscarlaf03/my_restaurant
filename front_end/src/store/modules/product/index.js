import axios from 'axios';

const state = {
  productItems: [],
};

const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  },
};

const actions = {
  getProductItems({ commit }) {
    axios.get('/api/products').then((response) => {
      commit('UPDATE_PRODUCT_ITEMS', response.data);
    });
  },
};

const getters = {
  productItems: (state, _, rootState) => {
    const { selected_categories } = rootState.category
    if (selected_categories.length){
      const filtered = state.productItems.filter(p => selected_categories.includes(p.category_id))
      return filtered
    } else{
      return state.productItems;
    }
  },
  productItemById: (state) => (id) => state.productItems.find((productItem) => productItem.id === id),
};

const productModule = {
  state,
  mutations,
  actions,
  getters,
};

export default productModule;
