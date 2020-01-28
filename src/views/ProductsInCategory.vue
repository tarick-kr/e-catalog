<template>
  <v-container>
    <cards-products-in-category :categoryId="this.categoryId"/>
  </v-container>
</template>

<script>

import CardsProductsInCategory from '../components/catalogCards/CardsProductsInCategory'

export default {
  name: 'productsInCategory',
  props: ['categoryId'],
  components: {
    CardsProductsInCategory
  }
}
</script>

<style scoped>

</style>
