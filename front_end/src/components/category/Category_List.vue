<template> 
<div class="box">
  <h1 class='is-size-3'>Chose your menu items</h1>
  <div class="is-flex">
    <div class='field is-flex-direction-row' v-for='category in available_categories' :key='category.id'>
      <CategoryListItem :category='category' />
    </div>
  </div>
</div>

</template>

<script>
import {mapGetters} from 'vuex';
import CategoryListItem from './Category_List_Item.vue';

export default {
  name: 'CategoryList',
  components: {
    CategoryListItem
  },
  computed: {
    ...mapGetters(['available_categories', 'selected_categories'])
  },
  created(){
    this.$store.dispatch('getCategories')
  }
}
</script>
