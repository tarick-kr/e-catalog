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
  props: ['productId', 'categoryId'],
  components: {
    AddProduct
  }
  // data () {
  //   return {
  // productSelectParams: []
  //   }
  // },
  // mounted () {
  // if (this.isSelectParams) {
  //   this.initSelectField()
  // }
  // }
  // methods: {
  // initSelectField () {
  //   let productSelectParams = []
  //   for (let i = 0; i < this.product.productSelectParams.length; i++) {
  //     let type = this.$store.getters.getSelectFieldByType(this.product.productSelectParams[i])
  //     productSelectParams.push(type)
  //   }
  //   this.productSelectParams = productSelectParams
  // },
  // updateParam (payload) {
  // this.$set(payload.product, payload.prop, payload.newValue)
  // this.editedParamValid[payload.index] = payload.valid
  // let editedParamCount = 0
  // for (let i = 0; i < this.editedParamValid.length; i++) {
  //   if (this.editedParamValid[i]) {
  //     editedParamCount++
  //   }
  // }
  // this.editedParamCount = editedParamCount
  // },
  // updateQuantity (payload) {
  // this.editedQuantity = Number(payload.newValue)
  // this.editedQuantityValid = payload.valid
  // },
  // updateSelect (payload) {
  // for (let i = 0; i < this.editedSelectParams.length; i++) {
  //   if (i === payload.index) {
  //     this.editedSelectParams[i].value = payload.newValue
  //   }
  // }
  // }
  // },
  // computed: {
  // product () {
  //   const categoryId = this.categoryId
  //   const productId = this.productId
  //   return this.$store.getters.getProductById(categoryId, productId)
  // },
  // isSelectParams () {
  //   return this.product.productSelectParams.length !== 0
  // }
  // }
}
</script>

<style scoped>

</style>
