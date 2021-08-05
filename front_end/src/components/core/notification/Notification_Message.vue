<template>
  <div :class="notificationType" class='notification has-text-centered'>
    <span class='is-size-5 '>{{notification.message}}</span>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  props: ['notification'],
  computed: {
    notificationType() {
      return `is-${this.notification.type || 'primary'}`;
    },
  },
  data() {
    return {
      timeout: null,
    };
  },
  created() {
    const notificationDuration = this.notification.milliseconds || 1300;
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, notificationDuration);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
  methods: mapActions(['removeNotification']),

};
</script>
