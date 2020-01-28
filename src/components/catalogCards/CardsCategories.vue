<template>
  <v-card
    height="100%"
    :to="{
      name: 'productsInCategory',
      params: { id: this.category.IdCategory, categoryId: this.category.IdCategory }
    }">
    <v-card-title class="subtitle-1 font-weight-bold justify-center text-center" style="word-break: break-word">{{ category.titleCategory }}</v-card-title>
    <v-img
      :src="category.imageCategory"
      max-height="250"
      contain
    ></v-img>
    <v-card-text class="body-2">{{ category.descriptionCategory }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CardsCategories',
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
