<template>
  <v-container>
    <div>{{ this.title }}</div>
    <v-container>
      <v-row justify="center">
        <v-col cols="6" sm="3"
          v-for="(srcImg, index) in this.images"
          :key="index"
        >
          <v-img
            :src="srcImg"
            max-height="200"
            contain
          />
        </v-col>
      </v-row>
    </v-container>
    <v-card-text>
      {{ this.description }}
    </v-card-text>
    <add-product
      :productId="productId"
      :categoryId="categoryId"
    />
  </v-container>
</template>

<script>

import AddProduct from '../components/product/AddProduct'
// import { mapGetters } from 'vuex'

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
  },
  data () {
    return {
      title: '',
      description: '',
      images: []
    }
  },
  created () {
    this.title = this.productDetail.titleProduct
    this.description = this.productDetail.description
    this.images = this.productDetail.imageAndSchemesProduct
  },
  computed: {
    productDetail () {
      let categoryId = this.categoryId
      let productId = this.productId
      return this.$store.getters.getProductByCategoryIdAndProductId(categoryId, productId)
    }
  }
}
</script>

<style scoped>

</style>
