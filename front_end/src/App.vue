<template>
  <div>
    <Navbar/>
    <div class="container mt-6 ">
      <div class="columns mt-6">
        <div class="column is-12 mt-6 column--align-center">
          <router-view></router-view>
        </div>
      </div>
      <NotificationList />
    </div>
  </div>
</template>
<script>
import Navbar from './components/core/Navbar';
import NotificationList from './components/core/notification/Notification_List.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    NotificationList,
  },
};
</script>
<style>
html,
body {
  height: 100%;
  background: #f2f6fa;
}
</style>
