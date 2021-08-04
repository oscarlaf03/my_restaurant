<template>
  <div class="card ">
  <div class="card-image">
    <figure class='image is-4by3'>
        <img :src="require(`@/assets/${productItem.image_tag}.jpg`)" alt="">
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      <h4>{{ productItem.name }}</h4>
    </div>
      <footer class='card-footer'>
        <p class='card-footer-item'>

          <a class="button is-primary is-light">
            <strong>$ {{ productItem.price }}</strong>
          </a>

        </p>
        <p class='card-footer-item'>
          <a
            class="button is-rounded is-pulled-left"
            @click="addCartItem(productItem)"
          >
            <strong>Add to Cart</strong>
          </a>
        </p>
      </footer>
    <div class="media">
      <div class="media-content">
      </div>
      <div class="media-right">
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductListItem',
  props: ['productItem'],
  methods: {
    ...mapActions(['addCartItem']),
  },
};
</script>
