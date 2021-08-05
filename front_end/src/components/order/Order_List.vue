<template>

  <div id="orders">
     <div class="orders--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <p v-if="!orders.length" class="cart-empty-text has-text-centered">
      No orders yet
    </p>
    <ul>
      <li class='order-item' v-for='order in orders' :key='order.id'>
        <OrderListItem :order='order'/>
      </li>
    </ul>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import OrderListItem from './Order_List_Item';

export default {
  name: 'OrderList',
  components: {
    OrderListItem,
  },
  computed: {
    ...mapGetters(['orders']),
  },
  created() {
    this.$store.dispatch('getOrders');
  },
};
</script>
