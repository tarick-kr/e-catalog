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
    <div v-if="!this.emptyCart">
      <list-products-in-cart
        :productsInCart="this.getProductsInCart"
      ></list-products-in-cart>
      <v-divider class="mb-2"/>
      <v-container class="py-0 mb-2">
        <v-row justify="center">
          <v-btn text tile color="primary" to="/order">
            Оформить заказ
          </v-btn>
        </v-row>
      </v-container>
    </div>
    <div v-else>
      <empty-cart></empty-cart>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
// import ToggleViewBtn from '../components/ToggleViewBtn'
import ListProductsInCart from '../components/cart/ListProductsInCart'
import EmptyCart from '../components/cart/EmptyCart'

export default {
  name: 'Cart',

  components: {
    // ToggleViewBtn,
    ListProductsInCart,
    EmptyCart
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
      'getCountProductsInCart'
    ]),
    emptyCart () {
      return !this.getCountProductsInCart > 0
    }
  }
}
</script>

<style scoped>

</style>
