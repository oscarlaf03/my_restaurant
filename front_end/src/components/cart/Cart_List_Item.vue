<template>
  <div class="box">
    <div class="cart-item__details">
      <p class="is-inline">{{cartItem.name}}</p>
      <div>
        <span class="cart-item--price has-text-info has-text-weight-bold">
          ${{cartItem.price}} X {{cartItem.quantity}}
        </span>

          <a class="button is-rounded is-pulled-right" @click="removeCartItem(cartItem)">Remove One</a>
          <a class="button is-rounded is-pulled-right" @click="addCartItem(cartItem)">Add one</a>
      </div>

    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'CartListItem',
  props: ['cartItem'],
  methods: {
    ...mapActions([
      'addCartItem',
      'removeCartItem',
    ]),
  },
};
</script>
