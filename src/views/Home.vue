<template>
  <v-container class="order">
    <v-container class="py-0 mb-2">
      <v-row>
        <h1 class="headline font-weight-bold">Главная</h1>
      </v-row>
    </v-container>
    <v-divider class="mb-2"/>
    <v-row class="position-center">
      <v-col>
        <v-btn text tile color="primary" to="/catalog">
          Сделать заказ
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      products: []
    }
  },
  created () {
    // this.products = this.$store.state.db.collection('products')
    // console.log(this.$store.state.db)
  }
}
</script>

<style scoped lang="sass">
  .position-center
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>
