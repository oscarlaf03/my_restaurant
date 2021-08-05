const getters = {
  productItems: (state, _, rootState) => {
    const { selected_categories } = rootState.category;
    if (selected_categories.length) {
      const filtered = state.productItems.filter((p) => selected_categories.includes(p.category_id));
      return filtered;
    }
    return state.productItems;
  },
  productItemById: (state) => (id) => state.productItems.find((productItem) => productItem.id === id),
};

export default getters;
