<template>
  <div></div>
</template>

<script>
export default {
  name: 'CardsProductsInCategory',
  props: ['categoryId'],
  computed: {
    cardsProductsInCategory () {
      const categoryId = this.categoryId
      return this.$store.getters.getCardsProductsByCategoryId(categoryId)
    }
  }
}
</script>

<style scoped>

</style>
