<template>
  <div class="container">
    <CategoryList/>

    <ProductList />

  </div>
</template>

<script>
import ProductList from '../product/Product_List.vue';
import CategoryList from '../category/Category_List.vue';

export default {
  name: 'Menu',
  components: {
    ProductList,
    CategoryList,
  },

};
</script>
