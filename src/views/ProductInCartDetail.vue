<template>
  <v-container>
    <v-container class="py-0 mb-2">
      <v-row>
        <h1 class="headline font-weight-bold d-inline-flex">{{ this.title }}</h1>
        <!--      <toggle-view-btn-->
        <!--        :viewCard="this.viewCard"-->
        <!--      ></toggle-view-btn>-->
      </v-row>
    </v-container>
    <v-divider class="mb-2"/>
    <v-row>
      <v-col cols="4">
        <v-row class="flex-column">
          <v-col v-for="(image, index) in this.images"
                 :key="index"
          >
            <v-img
              :src="image"
              max-height="200"
              contain
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="8">
        <v-row>
          <v-col cols="6">
            <span class="font-size: 16px font-weight-bold">Размеры изделия</span>
            <div v-for="param in params"
              :key="param.id"
            >
              <span class="font-param-style">{{ param.name + ' ' + param.sym + ' - ' }}</span>
              <span class="font-param-style">{{ param.value + ' ' + param.unit }}</span>
            </div>
          </v-col>
          <v-col cols="6">
            <span class="subtitle-1 font-weight-bold">Дополнительные параметры</span>
            <div v-for="param in selectParams"
                 :key="param.id"
            >
              <span class="font-param-style">{{ param.name + ' - '}}</span>
              <span class="font-param-style">{{ param.value + ' ' }}</span>
            </div>
          </v-col>
        </v-row>
        <v-divider class="mb-2"/>
        <v-row>
          <v-col cols="12">
            <div>
              <span class="font-param-style">Количество </span>
              <span class="font-param-style">{{ this.quantity + ' шт'}}</span>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <symbol-description :itemInCart="this.productById" class="font-param-style"></symbol-description>
          </v-col>
        </v-row>
        <edit-product :cartItem="this.productById"></edit-product>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import SymbolDescription from '../components/cart/SymbolDescription'
import EditProduct from '../components/product/EditProduct'

export default {
  name: 'ProductInCartDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    SymbolDescription,
    EditProduct
  },
  data () {
    return {
      images: [],
      title: '',
      description: '',
      params: [],
      selectParams: [],
      quantity: ''
    }
  },
  mounted () {
    this.images = this.productById.imagesProduct
    this.title = this.productById.titleProduct
    this.description = this.productById.descriptionProduct
    this.quantity = this.productById.quantity
    this.params = this.productById.productParams
    this.selectParams = this.productById.productSelectParams
  },
  computed: {
    ...mapGetters([
    ]),
    productById () {
      let id = this.id
      return this.$store.getters.getProductById(id)
    }

  }
}
</script>

<style scoped lang="sass">
  .font-param-style
    font-size: 15px
</style>
