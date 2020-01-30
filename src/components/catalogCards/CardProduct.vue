<template>
  <v-container>
    <v-row>
      <v-col cols="6" sm="4" md="3"
             v-for="item in this.cardsProductsInCategory"
             :key="item.productId"
      >
        <v-card
          height="100%"
          :to="{
            name: 'productDetail',
            params: { id: item.productId, productId: item.productId, categoryId: categoryId }
          }">
          <v-card-title class="subtitle-1 font-weight-bold justify-center text-center" style="word-break: break-word">{{ item.productTitle }}</v-card-title>
          <v-img
            :src="item.productImage"
            max-height="250"
            contain
          ></v-img>
          <v-card-text class="body-2">{{ cut(item.productDescription) }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CardProduct',
  props: {
    categoryId: {
      type: String,
      required: true
    }
  },
  components: {
  },
  data () {
    return {
      max_length_description: 60
    }
  },
  methods: {
    cut (text) {
      if (text.length > this.max_length_description) {
        return text.slice(0, this.max_length_description) + '...'
      }
      return text
    }
  },
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
