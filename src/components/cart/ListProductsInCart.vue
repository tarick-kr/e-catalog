<template>
  <v-container>
    <product-in-cart
      v-for="itemInCart in this.productsInCart"
      :key="itemInCart.id"
      :itemInCart="itemInCart"
    ></product-in-cart>
  </v-container>
</template>

<script>
import ProductInCart from './ProductInCart'
export default {
  name: 'ListProductsInCart',
  components: {
    ProductInCart
  },
  props: {
    productsInCart: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
