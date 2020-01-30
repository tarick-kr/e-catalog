<template>
  <v-container class="catalog">
    <v-row>
      <v-col cols="12" class="pt-0 text-end">
          <v-btn
            tile
            text
            small
            @click="onClickViewCatalog"
            :class="!this.viewCard ? 'v-btn--active' : ''"
          >
            <v-icon size="16">mdi-view-sequential</v-icon>
          </v-btn>
          <v-btn
            tile
            text
            small
            @click="onClickViewCatalog"
            :class="this.viewCard ? 'v-btn--active' : ''"
          >
            <v-icon size="16">mdi-view-grid</v-icon>
          </v-btn>
      </v-col>
    </v-row>
    <v-divider class="mb-2"/>
    <v-row>
      <v-col cols="12" class="pb-0">
        <h1 class="headline font-weight-bold">Каталог изделий</h1>
      </v-col>
    </v-row>
    <catalog-cards :listCategories="getListCategories" v-if="this.viewCard"/>
    <catalog-list :listCategories="getListCategories" v-else/>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import CatalogCards from '@/components/catalogCards/CatalogCards.vue'
import CatalogList from '@/components/catalogList/CatalogList.vue'

export default {
  name: 'Catalog',
  components: {
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
  },
  methods: {
    onClickViewCatalog () {
      this.$store.dispatch('TOGGLE_VIEW_TYPE_CATALOG')
    }
  }
}

</script>

<style scoped lang="sass">
  .v-btn--active
    color: #1976D2

</style>
