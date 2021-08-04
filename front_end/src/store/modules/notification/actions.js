const actions = {
  addNotification({commit}, notification){
    commit('PUSH_NOTIFICATION', notification);
  },
  removeNotification({commit}, notification){
    commit('REMOVE_NOTIFICATION', notification);
  }
};



export default actions;
