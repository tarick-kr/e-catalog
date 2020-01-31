<template>
  <v-dialog v-model="dialog" max-width="760px">
    <template v-slot:activator="{ on }">
      <v-btn fab dark x-small color="success" v-on="on" elevation="0" v-if="!getViewType">
        <v-icon dark>mdi-cart-plus</v-icon>
      </v-btn>
      <v-btn dark block color="success" v-on="on" elevation="0" v-if="getViewType">
        Добавить в корзину
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-center background-card-title px-1 px-sm-2 px-md-4 mb-4 py-2">
        <span class="title font-weight-bold mx-auto white--text">{{ this.title }}</span>
      </v-card-title>
      <v-container>
        <v-row justify="center">
          <v-col cols="6" sm="3"
            v-for="(srcImg, index) in this.images"
            :key="index"
          >
            <v-img
              :src="srcImg"
              max-height="200"
              contain
            />
          </v-col>
        </v-row>
      </v-container>
      <div class="text-center px-1 px-sm-2 px-md-4">
        <v-divider class="divider-width-align"/>
      </div>
      <v-card-text class="px-1 px-sm-2 px-md-4">
        <v-container>
          <v-row>
            <v-col
              cols="12" sm="4"
              v-for="(addedProductParam, index) in this.addedProductParams"
              :key="addedProductParam.id"
            >
              <input-param
                :index="index"
                :data="addedProductParam"
                @onUpdate="updateParam($event)"
              />
            </v-col>
          </v-row>
        </v-container>
        <div class="text-center px-1 px-sm-2 px-md-4">
          <v-divider class="divider-width-align"/>
        </div>
        <v-container>
          <v-row>
            <v-col
              cols="12" sm="4"
              v-for="(type, index) in this.addedProductSelectParams"
              :key="index">
              <input-select
                :data="type"
                :index="index"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-divider class="divider-width-align"/>
        <v-container>
          <v-row>
            <v-col cols="12" sm="4">
              <input-quantity
                :data="this.addedProductQuantity"
                :activated="this.addedProductQuantityActivated"
                @onUpdate="updateQuantity($event)"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          class="mr-4"
          color="red accent-4"
          dark
          small
          @click="onCancel"
        >Закрыть
          <v-icon right size="21">close</v-icon>
        </v-btn>
        <v-btn
          color="blue darken-1"
          class="white--text"
          small
          @click="addToCart"
        >
          Добавить
          <v-icon right size="19">mdi-cart-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import InputParam from '../inputs/InputParam'
import InputSelect from '../inputs/InputSelect'
import InputQuantity from '../inputs/InputQuantity'
import { mapGetters } from 'vuex'

export default {
  name: 'AddProduct',
  props: {
    productId: {
      type: String,
      required: true
    },
    categoryId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      dialog: false,
      addedProductParams: [],
      addedProductParamValid: [],
      addedProductParamCount: 0,
      addedProductSelectParams: [],
      addedProductQuantity: '',
      addedProductQuantityValid: true,
      addedProductQuantityActivated: false,
      title: '',
      images: [],
      image: '',
      id: ''
    }
  },
  components: {
    InputParam,
    InputSelect,
    InputQuantity
  },
  mounted () {
    this.initValue()
  },
  methods: {
    initValue () {
      for (let i = 0; i < this.product.productParams.length; i++) {
        let itemObj = this.product.productParams[i]
        let itemObjNew = Object.assign({}, itemObj)
        itemObjNew.value = ''
        this.addedProductParams.push(itemObjNew)
      }
      this.addedProductSelectParams = this.product.productSelectParams
      this.title = this.product.titleProduct
      this.images = this.product.imageAndSchemesProduct
      this.image = this.product.imageProduct
      this.id = this.product.id
    },
    strRand () {
      let result = ''
      let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
      let maxPosition = words.length - 1
      for (let i = 0; i < 5; ++i) {
        let position = Math.floor(Math.random() * maxPosition)
        result = result + words.substring(position, position + 1)
      }
      return result
    },
    updateParam (payload) {
      // this.$set(payload.product, payload.prop, payload.newValue)
      // this.editedParamValid[payload.index] = payload.valid
      // let editedParamCount = 0
      // for (let i = 0; i < this.editedParamValid.length; i++) {
      //   if (this.editedParamValid[i]) {
      //     editedParamCount++
      //   }
      // }
      // this.editedParamCount = editedParamCount
    },
    updateQuantity (payload) {
      if (payload.newValue === '' || isNaN(payload.newValue)) {
        this.addedProductQuantity = ''
      } else {
        this.addedProductQuantity = Number(payload.newValue)
      }
      if (payload.activated) {
        this.addedProductQuantityActivated = payload.activated
      }
      this.addedProductQuantityValid = payload.valid
    },
    onCancel () {
      this.dialog = false
      this.addedProductQuantityActivated = false
      this.addedProductQuantity = ''
    },
    addToCart () {
      let id = this.strRand()
      const product = {
        id: id,
        titleProduct: this.title,
        imageProduct: this.image,
        quantity: this.addedProductQuantity
      }
      this.$store.dispatch('ADD_PRODUCT_TO_CART', product)
    }
  },
  computed: {
    ...mapGetters([
      'getViewType'
    ]),
    product () {
      const categoryId = this.categoryId
      const productId = this.productId
      return this.$store.getters.getProductByCategoryIdAndProductId(categoryId, productId)
    }
  }
}
</script>

<style scoped lang="sass">
  .divider-width-align
    margin: 0 auto
    max-width: calc(100% - 26px)
  .background-card-title
    background-color: #1E88E5
</style>
