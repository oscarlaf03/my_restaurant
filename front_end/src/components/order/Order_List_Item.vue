<template>
  <div class="box m-2 p-3">
    <div class="content">
      <p>order id: {{order.id}}</p>
      <p>payment information: {{order.payment_info}}</p>
      <p>total amount: {{order.total}}</p>
      <p>order items:</p>
      <ul v-for='item in order.items' :key='item.id'>
        <li>name: {{item.name}}, price: {{item.price}}, quantity: {{item.quantity}}</li>
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
