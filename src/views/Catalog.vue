<template>
  <v-container class="catalog">
    <v-container class="py-0 mb-2">
      <v-row class="justify-space-between">
        <h1 class="headline font-weight-bold d-inline-flex">Каталог изделий</h1>
        <toggle-view-btn
          :viewCard="this.viewCard"
        ></toggle-view-btn>
      </v-row>
    </v-container>
    <v-divider class="mb-2"/>
    <catalog-cards :listCategories="getListCategories" v-if="this.viewCard"/>
    <catalog-list :listCategories="getListCategories" v-else/>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ToggleViewBtn from '@/components/ToggleViewBtn'
import CatalogCards from '@/components/catalogCards/CatalogCards.vue'
import CatalogList from '@/components/catalogList/CatalogList.vue'

export default {
  name: 'Catalog',
  components: {
    ToggleViewBtn,
    CatalogCards,
    CatalogList
  },
  data () {
    return {
      viewCard: 0
    }
  },
  computed: {
    ...mapGetters([
      'getListCategories',
      'getViewType'
    ])
  },
  watch: {
    'getViewType': {
      handler (val) {
        this.viewCard = val
      }
    }
  },
  mounted () {
    this.viewCard = this.getViewType
  }
}

</script>

<style scoped lang="sass">
</style>
