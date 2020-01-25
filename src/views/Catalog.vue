<template>
  <v-container class="catalog">
    <v-row>
      <v-col cols="12" class="pt-0">
        <v-btn-toggle
          v-model="viewCards"
          mandatory
          class="d-flex justify-end"
        >
          <v-btn small @click="onClick">
            <v-icon size="16">mdi-view-sequential</v-icon>
          </v-btn>
          <v-btn small @click="onClick">
            <v-icon size="16">mdi-view-grid</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-divider class="mb-2"/>
    <v-row>
      <v-col cols="12" class="pb-0">
        <h1 class="headline font-weight-bold">Каталог изделий</h1>
      </v-col>
    </v-row>
    <catalog-cards :listCategories="getListCategories" v-if="this.viewCards"/>
    <catalog-list :listCategories="getListCategories" v-else/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CatalogList from '@/components/catalogList/CatalogList.vue'
import CatalogCards from '@/components/catalogCards/CatalogCards.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'catalog',
  data () {
    return {
      viewCards: false,
      toggle_exclusive: undefined
    }
  },
  components: {
    CatalogList,
    CatalogCards
  },
  methods: {
    onClick () {
      this.viewCards = !this.viewCards
    }
  },
  computed: {
    ...mapGetters([
      'getListCategories'
    ])
  }
}
</script>
