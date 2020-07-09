<template>
  <v-container class="catalog">
    <template v-if="this.loading">
      <loader></loader>
    </template>
    <template v-else>
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
    </template>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ToggleViewBtn from '@/components/ToggleViewBtn'
import CatalogCards from '@/components/catalogCards/CatalogCards.vue'
import CatalogList from '@/components/catalogList/CatalogList.vue'
import Loader from '../components/Loader'

export default {
  name: 'Catalog',
  components: {
    ToggleViewBtn,
    CatalogCards,
    CatalogList,
    Loader
  },
  data () {
    return {
      viewCard: 0,
      loading: null
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
  beforeCreate () {
    this.loading = true
  },
  mounted () {
    this.viewCard = this.getViewType
    this.$nextTick(() => {
      this.loading = false
    })
  }
}

</script>

<style scoped lang="sass">
</style>
