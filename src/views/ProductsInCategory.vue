<template>
  <v-container>
    <h1>{{ this.categoryInfo.title }}</h1>
    <div>{{ this.categoryInfo.description }}</div>
    <card-product :categoryId="this.setCategoryId"/>
  </v-container>
</template>

<script>

import CardProduct from '../components/catalogCards/CardProduct'
import { mapGetters } from 'vuex'

export default {
  name: 'productsInCategory',
  props: {
    categoryId: {
      type: String
    }
  },
  data () {
    return {
      categoryInfo: {}
    }
  },
  components: {
    CardProduct
  },
  mounted () {
    let idCat = this.setCategoryId
    let category = this.getInfoCategoryByCategoryId(idCat)
    this.categoryInfo = {
      title: category.titleCategory,
      description: category.description
    }
  },
  computed: {
    ...mapGetters([
      'getInfoCategoryByCategoryId'
    ]),
    setCategoryId () {
      return typeof this.categoryId === 'undefined' ? this.$attrs.id : this.categoryId
    }
  }
}
</script>

<style scoped>

</style>
