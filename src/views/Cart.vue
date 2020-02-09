<template>
  <v-container class="cart">
    <v-container class="py-0 mb-2">
      <v-row>
        <h1 class="headline font-weight-bold d-inline-flex">Корзина</h1>
        <!--      <toggle-view-btn-->
        <!--        :viewCard="this.viewCard"-->
        <!--      ></toggle-view-btn>-->
      </v-row>
    </v-container>
    <v-divider class="mb-2"/>
    <list-products-in-cart
      :productsInCart="this.getProductsInCart"
    ></list-products-in-cart>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
// import ToggleViewBtn from '../components/ToggleViewBtn'
import ListProductsInCart from '../components/cart/ListProductsInCart'

export default {
  name: 'Cart',

  components: {
    // ToggleViewBtn,
    ListProductsInCart
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
      'getCountProductsInCart'
    ])
  }
}
</script>

<style scoped>

</style>
