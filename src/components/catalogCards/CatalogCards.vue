<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2"
         v-for="category in cardsCategories"
         :key="category.IdCategory"
      >
        <card-category :category="category"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import CardCategory from './CardCategory'

export default {
  name: 'CatalogCards',
  props: {
    listCategories: {
      type: Array,
      required: true
    }
  },
  components: {
    CardCategory
  },
  data () {
    return {
      cardsCategories: []
    }
  },
  mounted () {
    for (let i = 0; i < this.listCategories.length; i++) {
      let infoCategory = this.getInfoCategoryByCategoryId(this.listCategories[i].categoryId)
      this.cardsCategories.push({
        IdCategory: this.listCategories[i].categoryId,
        titleCategory: infoCategory.titleCategory,
        imageCategory: infoCategory.imageCategory,
        descriptionCategory: infoCategory.description
      })
    }
  },
  computed: {
    ...mapGetters([
      'getInfoCategoryByCategoryId'
    ])
  }
}
</script>

<style scoped lang="sass">

</style>
