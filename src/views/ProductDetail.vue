<template>
  <v-container>
    <div>productDetail</div>
    <add-product
      :productId="productId"
      :categoryId="categoryId"
    />
  </v-container>
</template>

<script>

import AddProduct from '../components/product/AddProduct'

export default {
  name: 'productDetail',
  props: {
    categoryId: {
      type: String,
      required: true
    },
    productId: {
      type: String,
      required: true
    }
  },
  components: {
    AddProduct
  }
}
</script>

<style scoped>

</style>
