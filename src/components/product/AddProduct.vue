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
      <v-form>
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
                  ref="inputAddParam"
                  :index="index"
                  :payload="addedProductParam"
                  @onUpdate="updateParam($event)"
                />
              </v-col>
            </v-row>
          </v-container>
          <div class="text-center px-1 px-sm-2 px-md-4">
            <v-divider class="divider-width-align"/>
          </div>
          <v-container v-if="this.hasSelectFields">
            <v-row>
              <v-col
                cols="12" sm="4"
                v-for="(itemSelect, index) in this.addedProductSelectParams"
                :key="index">
                <input-select
                  :payload="itemSelect"
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
                  ref="inputAddQuantity"
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
            :disabled="!this.allParamsCompleted"
          >
            Добавить
            <v-icon right size="19">mdi-cart-plus</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import InputParam from '../inputsAdd/InputAddParam'
import InputSelect from '../inputsAdd/InputAddSelect'
import InputQuantity from '../inputsAdd/InputAddQuantity'
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
  components: {
    InputParam,
    InputSelect,
    InputQuantity
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
      addedSequence: [],
      addedProductParams: [],
      addedProductParamsValid: [],
      addedProductParamsCount: 0,
      addedProductSelectParams: [],
      addedTypesSelects: [],
      addedProductQuantity: '',
      addedProductQuantityValid: ''
    }
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
      this.addedShortTitle = this.product.shortTitle
      this.addedProductImage = this.product.imageProduct
      this.addedProductImages = this.product.imageAndSchemesProduct
      this.addedProductDescription = this.product.description
      this.addedShortDescriptionType = this.product.shortDescriptionType
      this.addedSequence = this.product.sequence

      for (let i = 0; i < this.product.productParams.length; i++) {
        let itemObj = this.product.productParams[i]
        let itemObjNew = Object.assign({}, itemObj)
        itemObjNew.value = ''
        itemObjNew.valid = false
        this.addedProductParams.push(itemObjNew)
      }
      for (let i = 0; i < this.product.productParams.length; i++) {
        this.addedProductParamsValid.push(false)
      }

      for (let i = 0; i < this.product.productSelectParams.length; i++) {
        let itemSelectObj = this.getSelectFieldByType(this.product.productSelectParams[i])
        let itemSelectObjNew = Object.assign({}, itemSelectObj)
        this.addedProductSelectParams.push(itemSelectObjNew)
      }

      this.addedTypesSelects = this.product.productSelectParams
      this.addedProductQuantityValid = false
    },
    updateParam (payload) {
      this.$set(payload.productParam, payload.propValue, Number(payload.newValue))
      this.$set(payload.productParam, payload.propValid, payload.newValidValue)

      this.addedProductParamsValid[payload.index] = payload.newValidValue

      let addedProductParamsCount = 0
      for (let i = 0; i < this.addedProductParamsValid.length; i++) {
        if (this.addedProductParamsValid[i]) {
          addedProductParamsCount++
        }
      }
      this.addedProductParamsCount = addedProductParamsCount
    },
    updateSelect (payload) {
      this.$set(payload.productSelect, payload.prop, payload.newValue)
    },
    updateQuantity (payload) {
      this.addedProductQuantity = Number(payload.newValue)
      this.addedProductQuantityValid = payload.valid
    },
    resetForm () {
      this.addedProductParams = []
      this.addedProductSelectParams = []
      this.addedProductQuantity = ''
    },
    resetInputs () {
      for (let i = 0; i < this.$refs.inputAddParam.length; i++) {
        this.$refs.inputAddParam[i].reset()
      }
      this.$refs.inputAddQuantity.reset()
    },
    onCancel () {
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
        sequence: this.addedSequence,
        productParams: this.addedProductParams,
        productSelectParams: this.addedProductSelectParams,
        typesSelects: this.addedTypesSelects,
        quantity: this.addedProductQuantity
      }
      this.$store.dispatch('ADD_PRODUCT_TO_CART', product)

      this.dialog = false
    },
    reset () {
      this.resetForm()
      this.initValue()
      this.resetInputs()
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
    hasSelectFields () {
      return this.addedProductSelectParams.length !== 0
    },
    inputsParamCompleted () {
      return this.addedProductParams.length === this.addedProductParamsCount
    },
    inputQuantityCompleted () {
      return this.addedProductQuantityValid
    },
    allParamsCompleted () {
      return this.inputsParamCompleted && this.inputQuantityCompleted
    }
  },
  watch: {
    'dialog': {
      handler (val) {
        if (val === false) {
          this.reset()
        }
      }
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
