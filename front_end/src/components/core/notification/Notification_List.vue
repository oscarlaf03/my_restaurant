<template>
  <div class="notification-list">
    <NotificationMessage v-for='notification in notifications' :key='notification.id' :notification='notification' />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NotificationMessage from './Notification_Message.vue';

export default {
  name: 'NotificationList',
  components: {
    NotificationMessage,
  },
  computed: {
    ...mapGetters(['notifications']),
  },

};

</script>

<style scoped>

  .notification-list {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 15px;
    width: 380px;
  }

</style>
