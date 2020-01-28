<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2"
         v-for="category in displayCategory"
         :key="category.IdCategory"
      >
        <cards-categories :category="category"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import CardsCategories from './CardsCategories'

export default {
  name: 'CatalogCards',
  props: {
    listCategories: {
      type: Array,
      required: true
    }
  },
  components: {
    CardsCategories
  },
  data () {
    return {
      displayCategory: []
    }
  },
  mounted () {
    for (let i = 0; i < this.listCategories.length; i++) {
      let infoCategory = this.getInfoCategoryByCategoryId(this.listCategories[i].categoryId)
      this.displayCategory.push({
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
.v-card__title
  height: 95px
</style>
