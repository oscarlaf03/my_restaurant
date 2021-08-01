<template>
  <div class="box">
    <div class="order-item__details">
      <p>order id:{{order.id}}</p>
      <p>payment_info: {{order.payment_info}}</p>
      <p>total amount: {{order.total}}</p>
      <ul class='order-item' v-for='item in order.items' :key='item.id'>
        <li>name: {{item.title}} price: {{item.price}} quantity: {{item.quantity}}</li>
      </ul>
    </div>
  </div>

</template>

<script>

export default {
  name: 'OrderListItem',
  props: ['order'],
};
</script>
