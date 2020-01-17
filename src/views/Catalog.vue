<template>
  <v-container class="catalog">
    <catalog-list :titleCategory="getListTitleCategories"/>
    <catalog-cards :titleCategory="getListTitleCategories" v-show="false"/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CatalogList from '@/components/catalogList/CatalogList.vue'
import CatalogCards from '@/components/catalogCards/CatalogCards.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'catalog',
  components: {
    CatalogList,
    CatalogCards
  },
  computed: {
    ...mapGetters([
      'getListTitleCategories'
    ])
  }
}
</script>
