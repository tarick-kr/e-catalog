<template>
  <v-container>
    <v-expansion-panel
      v-for="item in this.titleCategory"
      :key="item.categoryId"
    >
      <v-expansion-panel-header class="subtitle-2 font-weight-medium">
        {{item.categoryName}}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <list-products-in-category :categoryId="item.categoryId"/>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
import ListProductsInCategory from './ListProductsInCategory'
import { mapGetters } from 'vuex'
export default {
  name: 'ListCategories',
  components: {
    ListProductsInCategory
  },
  props: ['titleCategory'],
  computed: {
    ...mapGetters([

    ])
  }
}
</script>

<style scoped>

</style>
