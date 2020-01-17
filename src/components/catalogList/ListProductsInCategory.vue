<template>
  <v-list flat>
    <v-list-item-group>
      <v-list-item
        v-for="item in listProductsInCategory"
        :key="item.productId"
        :to="{
          name: 'productDetail',
          params: {id: item.productId, productId: item.productId, categoryId: categoryId}
        }"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.productTitle" />
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>

export default {
  name: 'ListProductsInCategory',
  components: {},
  props: ['categoryId'],
  computed: {
    listProductsInCategory () {
      const categoryId = this.categoryId
      return this.$store.getters.getListTitleProductsByCategoryId(categoryId)
    }
  }
}
</script>

<style scoped>

</style>
