<template>
  <div>
    <v-fade-transition hide-on-leave>
      <v-card v-show="isActiveCategory" transition="slide-x-reverse-transition">
        <v-card-title>{{ currentCategory.titleCategory }}</v-card-title>
        <v-img
          :src="this.currentCategory.imageCategory"
          max-height="250"
          contain
        />
        <v-card-text>{{ currentCategory.description }}</v-card-text>
      </v-card>
    </v-fade-transition>
    <v-fade-transition hide-on-leave>
      <v-card v-show="!isActiveCategory" transition="slide-x-reverse-transition">
        <v-img
          :src="this.getCatalogInfo.imageCatalog"
          max-height="250"
          contain
        />
        <v-card-text>{{ getCatalogInfo.description }}</v-card-text>
      </v-card>
    </v-fade-transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Info',
  props: {
    categoryId: {
      type: [String],
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getCatalogInfo'
    ]),
    isActiveCategory () {
      let noActive
      noActive = this.categoryId !== 'noActive'
      return noActive
    },
    currentCategory () {
      let categoryId = this.categoryId
      if (categoryId !== 'noActive') {
        categoryId = this.$store.getters.getInfoCategoryByCategoryId(categoryId)
      }
      return categoryId
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
