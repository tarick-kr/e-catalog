<template>
  <v-container>
    <div class="pa-2 mb-4 white">
      <div class="subtitle-1 font-weight-medium text-center">{{ product.titleProduct }}</div>
      <v-container>
        <form>
          <v-layout row>
            <v-flex sm5>
              <v-img
                class="mr-4 mt-7"
                :src="product.imageProduct"
                aspect-ratio="1"
              />
            </v-flex>
            <v-flex sm7>
              <div class="body-2 mb-3">
                <input-param
                  v-for="(field, index) in this.product.productParams"
                  :key="index"
                  :value="field.value"
                  :minimValue="field.minimValue"
                  :maximValue="field.maximValue"
                  :name="field.name"
                  :sym="field.sym"
                  :unit="field.unit"
                >
                </input-param>
                <v-divider />
                <input-select />
                <v-divider />
                <input-quantity />
              </div>
              <v-card-actions>
                <v-btn large block color="success">
                  Добавить в заказ
                </v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </form>
      </v-container>
    </div>
  </v-container>
</template>

<script>

import InputParam from '@/components/inputs/InputParam'
import InputSelect from '@/components/inputs/InputSelect'
import InputQuantity from '@/components/inputs/InputQuantity'

export default {
  name: 'productDetail',
  props: ['productId', 'categoryId'],
  components: {
    InputParam,
    InputSelect,
    InputQuantity
  },
  computed: {
    product () {
      const categoryId = this.categoryId
      const productId = this.productId
      return this.$store.getters.getProductById(categoryId, productId)
    }
  }
}
</script>

<style scoped>

</style>
