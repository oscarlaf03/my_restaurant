const mutations = {
  PUSH_NOTIFICATION(state, notification) {
    state.notifications.push({
      ...notification,
      id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
    });
  },
  REMOVE_NOTIFICATION(state, notification){
    state.notifications = state.notifications.filter( n =>{
      return n.id != notification.id
    });
  }

};

export default mutations;
