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
        <span class="title font-weight-bold mx-auto white--text">{{ this.addedProductTitle }}</span>
      </v-card-title>
      <v-container>
        <v-row justify="center">
          <v-col cols="6" sm="3"
            v-for="(srcImg, index) in this.addedProductImages"
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
                @onActivate="activateParam($event)"
              />
            </v-col>
          </v-row>
        </v-container>
        <div class="text-center px-1 px-sm-2 px-md-4">
          <v-divider class="divider-width-align"/>
        </div>
        <v-container v-if="this.isSelectFields">
          <v-row>
            <v-col
              cols="12" sm="4"
              v-for="(itemSelect, index) in this.addedProductSelectParams"
              :key="index">
              <input-select
                :data="itemSelect"
                :index="index"
                @onUpdate="updateSelect($event)"
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
      addedProductId: '',
      addedProductTitle: '',
      addedShortTitle: '',
      addedProductImage: '',
      addedProductImages: [],
      addedProductDescription: '',
      addedShortDescriptionType: '',

      addedProductParams: [],
      addedProductParamValid: [],
      addedProductParamCount: 0,

      addedProductSelectParams: [],

      addedProductQuantity: '',
      addedProductQuantityValid: true,
      addedProductQuantityActivated: false
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
    initValue () {
      this.addedProductId = this.strRand()
      this.addedProductTitle = this.product.titleProduct
      this.shortTitle = this.product.shortTitle
      this.addedProductImage = this.product.imageProduct
      this.addedProductImages = this.product.imageAndSchemesProduct
      this.addedProductDescription = this.product.description
      this.addedShortDescriptionType = this.product.shortDescriptionType

      for (let i = 0; i < this.product.productParams.length; i++) {
        let itemObj = this.product.productParams[i]
        let itemObjNew = Object.assign({}, itemObj)
        itemObjNew.value = ''
        itemObjNew.activated = false
        this.addedProductParams.push(itemObjNew)
      }
      for (let i = 0; i < this.product.productParams.length; i++) {
        this.addedProductParamValid.push(true)
      }

      for (let i = 0; i < this.product.productSelectParams.length; i++) {
        let itemSelectObj = this.getSelectFieldByType(this.product.productSelectParams[i])
        let itemSelectObjNew = Object.assign({}, itemSelectObj)
        this.addedProductSelectParams.push(itemSelectObjNew)
      }
    },
    activateParam (payload) {
      this.$set(payload.productParam, payload.prop, payload.newValue)
    },
    updateParam (payload) {
      if (isNaN(payload.newValue)) {
        let newValue = ''
        this.$set(payload.productParam, payload.prop, newValue)
      } else {
        this.$set(payload.productParam, payload.prop, payload.newValue)
      }
      this.addedProductParamValid[payload.index] = payload.valid
      let addedProductParamCount = 0
      for (let i = 0; i < this.addedProductParamValid.length; i++) {
        if (this.addedProductParamValid[i]) {
          addedProductParamCount++
        }
      }
      this.addedProductParamCount = addedProductParamCount
    },
    updateSelect (payload) {
      this.$set(payload.productSelect, payload.prop, payload.newValue)
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
      this.addedProductParams = []
      this.addedProductSelectParams = []
      this.addedProductQuantity = ''
      this.addedProductQuantityActivated = false
      this.initValue()
      this.dialog = false
    },
    addToCart () {
      const randomId = this.strRand()
      const product = {
        id: randomId,
        titleProduct: this.addedProductTitle,
        shortTitle: this.addedShortTitle,
        imageProduct: this.addedProductImage,
        imagesProduct: this.addedProductImages,
        descriptionProduct: this.addedProductDescription,
        shortDescriptionType: this.addedShortDescriptionType,
        productParams: this.addedProductParams,
        productSelectParams: this.addedProductSelectParams,
        quantity: this.addedProductQuantity
      }
      this.$store.dispatch('ADD_PRODUCT_TO_CART', product)

      this.addedProductParams = []
      this.addedProductSelectParams = []
      this.addedProductQuantity = ''
      this.addedProductQuantityActivated = false
      this.initValue()
      this.dialog = false
    }
  },
  computed: {
    ...mapGetters([
      'getViewType',
      'getSelectFieldByType'
    ]),
    product () {
      const categoryId = this.categoryId
      const productId = this.productId
      return this.$store.getters.getProductByCategoryIdAndProductId(categoryId, productId)
    },
    isSelectFields () {
      return this.addedProductSelectParams.length !== 0
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
