<template>
  <div class="cart">
    <h1>This is an cart page</h1>
    <h2>{{ this.cartCount }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'cart',
  components: {

  },
  computed: {
    ...mapGetters([
      'productsInCart',
      'cartCount'
    ])
  }
}
</script>
