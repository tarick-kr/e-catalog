<template>
  <v-container>
    <div class="cart">
      <h1>This is an cart page</h1>
      <h2>количество товаров в корзине - {{ this.cartCount }}</h2>
      <div v-for="(item, index) in this.productsInCart"
        :key="index"
      >
        <span class="mr-10">{{ item.titleProduct }}</span>
        <span>{{ item.quantity }}</span>
      </div>
    </div>
  </v-container>
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

id: randomId,
titleProduct: this.addedProductTitle,
shortTitle: this.addedShortTitle,
imageProduct: this.addedProductImage,
imagesProduct: this.addedProductImages,
descriptionProduct: this.addedProductDescription,
shortDescriptionType: this.addedShortDescriptionType,
productParams: this.addedProductParams,
productSelectParams: this.addedProductSelectParams,
quantity: this.addedProductQuantity
