const mutations = {
  PUSH_NOTIFICATION(state, notification) {
    const randomUniqueId= (Math.random().toString(36) + Date.now().toString(36)).substr(2);
    state.notifications.push({
      ...notification,
      id: randomUniqueId
    });
  },
  REMOVE_NOTIFICATION(state, notification){
    state.notifications = state.notifications.filter( n =>{
      return n.id != notification.id
    });
  }

};

export default mutations;
