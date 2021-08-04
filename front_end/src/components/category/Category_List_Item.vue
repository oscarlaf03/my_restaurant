<template>
  <label class="checkbox">
    <input type="checkbox">
    {{category}}
  </label>
</template>

<script>
  export default {
    name: 'CategoryListItem',
    props:['category']
  }
</script>
