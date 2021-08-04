<template>
  <label class="checkbox">
    <input type="checkbox" @click='toggleCategory(category.id)'>
    {{category.name}}
  </label>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    name: 'CategoryListItem',
    props:['category'],
    methods:{...mapActions(['toggleCategory'])}
  }
</script>
