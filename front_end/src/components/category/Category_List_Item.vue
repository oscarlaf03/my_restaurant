<template>
  <label class="checkbox m-2 p-1  ">
    <input type="checkbox" @click='toggleCategory(category.id)'>
    {{category.name}}
  </label>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CategoryListItem',
  props: ['category'],
  methods: { ...mapActions(['toggleCategory']) },
};
</script>
