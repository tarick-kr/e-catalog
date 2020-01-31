<template>
  <div>
    <v-list-item
      link
      dense
      v-for="item in listProductsInCategory"
      :key="item.productId"
      class="pl-10"
    >
      <v-list-item-content>
        <router-link
          style="list-style: none"
          tag="li"
          :to="{
            name: 'productDetail',
            params: { id: item.productId, productId: item.productId, categoryId: categoryId }
          }"
        >
          <v-list-item-title>
            {{ item.productTitle }}
          </v-list-item-title>
        </router-link>
      </v-list-item-content>
      <add-product
        :productId="item.productId"
        :categoryId="categoryId"
      />
    </v-list-item>
  </div>
</template>

<script>

import AddProduct from '../product/AddProduct'
export default {
  name: 'ListProductsInCategory',
  components: { AddProduct },
  props: {
    categoryId: {
      type: String,
      required: true
    }
  },
  computed: {
    listProductsInCategory () {
      const categoryId = this.categoryId
      return this.$store.getters.getListNamesProductsByCategoryId(categoryId)
    }
  }
}
</script>

<style scoped lang="sass">
  .v-list-item:last-child
    box-shadow: 0 3px 5px -2px rgba(0,0,0,0.8)

  .v-list-item:not(:last-child)::after
    content: ''
    width: 100%
    height: 1px
    background: rgba(0, 0, 0, 0.12)
    position: absolute
    bottom: 0

</style>
