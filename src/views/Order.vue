<template>
  <v-container class="order">
    <v-container class="py-0 mb-2">
      <v-row>
        <h1 class="headline font-weight-bold d-inline-flex">Офрмление заказа</h1>
      </v-row>
    </v-container>
    <v-divider class="mb-2"/>
    <v-container class="pt-0">
      <v-row>
        <h2 class="title d-inline-flex">Персональные данные</h2>
      </v-row>
      <v-row>
        <data-client
          ref="dataClient"
          @updateCompleted="completed($event)"
        ></data-client>
      </v-row>
    </v-container>
    <v-divider class="mb-2"/>
    <v-container class="pt-0">
      <v-row>
        <h2 class="title d-inline-flex">Перечень изделий</h2>
      </v-row>
      <v-row>
        <list-products-in-order></list-products-in-order>
      </v-row>
    </v-container>
    <v-divider class="mb-2"/>
    <v-row justify="end">
      <v-btn
        text
        tile
        color="primary"
        @click="onSaveAndGo"
        :disabled="!this.formCompleted"
      >
        Далее
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import DataClient from '../components/order/DataClient'
import ListProductsInOrder from '../components/order/ListProductsInOrder'

export default {
  name: 'Order',
  components: {
    DataClient,
    ListProductsInOrder
  },
  data () {
    return {
      formCompleted: false
    }
  },
  methods: {
    onSaveAndGo () {
      this.$refs.dataClient.saveDataClient()
      this.$router.push('/preview')
    },
    completed (e) {
      this.formCompleted = e
    }
  }
}
</script>

<style scoped>

</style>
