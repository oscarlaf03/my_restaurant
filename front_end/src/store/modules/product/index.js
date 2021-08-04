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
    console.log('\n\n loggin store',rootState)
    const { selected_categories } = rootState.category
    console.log('selected_categories teswt:', selected_categories)
    if (selected_categories.length){
      const filtered = state.productItems.filter(p => selected_categories.includes(p.category_id))
      console.log('filtertedtest:', filtered)
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
