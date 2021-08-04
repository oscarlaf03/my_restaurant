<template>
  <div class="columns is-mobile is-multiline is-centered ">
    <CategoryList/>
    <div class="column is-one-quarter" v-for="productItem in productItems" :key="productItem.id">
    <ProductListItem :productItem="productItem"/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Product_List_Item from './Product_List_Item';
import Category_List from '../category/Category_List.vue'


export default {
  name: 'ProductList',
  components: {
    ProductListItem: Product_List_Item,
    CategoryList: Category_List
  },
  computed: {
    ...mapGetters([
      'productItems',
    ]),
  },
  created() {
    this.$store.dispatch('getProductItems');
  },
};
</script>
