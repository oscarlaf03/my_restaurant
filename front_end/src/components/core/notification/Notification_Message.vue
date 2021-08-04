<template>
  <div class="notification is-info">
    <!-- <button type='button' class='close' data-dismiss='alert' aria-label="Close"> -->
      <span aria-hidden="true">&times;</span>
    <!-- </button> -->
    {{notification.message}}
  </div>
</template>

<script>

import {mapActions} from 'vuex';

export default {
  props: ['notification'],
  data(){
    return {
      timeout: null
    }
  },
  created() {
    this.timeout = setTimeout(()=>{
      this.removeNotification(this.notification);
    },1500);

  },
  beforeDestroy(){
    clearTimeout(this.timeout);

  },
  methods:  mapActions(['removeNotification'])

};
</script>
