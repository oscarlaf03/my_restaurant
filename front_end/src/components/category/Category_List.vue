<template> 
  <div class="container">
    <h1>about to render my available categories </h1>
    {{selected_categories}}
    <div class='field' v-for='category in available_categories' :key='category.id'>
      <CategoryListItem :category='category' />
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
