<template>
  <div class="notification-list"> 
    <NotificationMessage v-for='notification in notifications' :key='notification.id' :notification='notification' />

  </div>
</template>

<script>
  import NotificationMessage from './Notification_Message.vue'

  import { mapGetters} from 'vuex';
  export default {
    name: 'NotificationList',
    components: {
      NotificationMessage
    },
    computed: {
      ...mapGetters(['notifications'])
    }

  }

</script>



<style scoped>

  .notification-list {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 15px;
    width: 320px;
  }

</style>
