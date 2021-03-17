<template>
  <v-row justify="end" class="mr-4">
    <v-dialog v-model="dialog" max-width="760px">
      <template v-slot:activator="{ on }">
        <v-btn class="my-2" color="success" small dark v-on="on">
          изменить
          <v-icon size="18" right>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-form>
          <v-card-title class="text-center background-card-title px-1 px-sm-2 px-md-4 mb-4 py-2">
            <span class="title font-weight-bold mx-auto white--text">{{ this.editedProductTitle }}</span>
          </v-card-title>
          <v-container>
            <v-row justify="center">
              <v-col cols="6" sm="3"
                     v-for="(srcImg, index) in this.editedProductImages"
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
                  v-for="(editedProductParam, index) in this.editedProductParams"
                  :key="editedProductParam.id"
                >
                  <input-param
                    ref="inputEditParam"
                    :index="index"
                    :data="editedProductParam"
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
                  v-for="(itemSelect, index) in this.editedProductSelectParams"
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
                    :data="this.editedProductQuantity"
                    ref="inputEditQuantity"
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
              <v-icon right size="21">mdi-close</v-icon>
            </v-btn>
            <v-btn
              color="blue darken-1"
              class="white--text"
              small
              @click="onSave"
              :disabled="!this.allParamsCompleted"
            >
              Сохранить
              <v-icon right size="19">mdi-content-save</v-icon>
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import InputParam from '../inputsEdit/InputEditParam'
import InputSelect from '../inputsEdit/InputEditSelect'
import InputQuantity from '../inputsEdit/InputEditQuantity'
import { mapGetters } from 'vuex'

export default {
  name: 'EditProduct',
  components: {
    InputParam,
    InputSelect,
    InputQuantity
  },
  props: {
    cartItem: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dialog: false,
      editedProductId: '',
      editedProductTitle: '',
      editedShortTitle: '',
      editedProductImage: '',
      editedProductImages: [],
      editedProductDescription: '',
      editedShortDescriptionType: '',
      editedSequence: [],
      editedProductParams: [],
      editedProductParamsValid: [],
      editedProductParamsCount: 0,
      editedProductSelectParams: [],
      editedProductQuantity: '',
      editedProductQuantityValid: ''
    }
  },
  mounted () {
    this.initValue()
  },
  methods: {
    initValue () {
      this.editedProductId = this.cartItem.id
      this.editedProductTitle = this.cartItem.titleProduct
      this.editedShortTitle = this.cartItem.shortTitle
      this.editedProductImage = this.cartItem.imageProduct
      this.editedProductImages = this.cartItem.imagesProduct
      this.editedProductDescription = this.cartItem.description
      this.editedShortDescriptionType = this.cartItem.shortDescriptionType
      this.editedSequence = this.cartItem.sequence

      for (let i = 0; i < this.cartItem.productParams.length; i++) {
        let itemObj = this.cartItem.productParams[i]
        let itemObjNew = Object.assign({}, itemObj)
        this.editedProductParams.push(itemObjNew)
      }
      for (let i = 0; i < this.cartItem.productParams.length; i++) {
        this.editedProductParamsValid.push(true)
      }
      this.editedProductParamsCount = this.editedProductParams.length

      for (let i = 0; i < this.cartItem.productSelectParams.length; i++) {
        let itemSelectObj = this.cartItem.productSelectParams[i]
        let itemSelectObjNew = Object.assign({}, itemSelectObj)
        this.editedProductSelectParams.push(itemSelectObjNew)
      }

      this.editedProductQuantityValid = true
      this.editedProductQuantity = this.cartItem.quantity
    },
    updateParam (payload) {
      this.$set(payload.productParam, payload.propValue, Number(payload.newValue))
      this.$set(payload.productParam, payload.propValid, payload.newValidValue)

      this.editedProductParamsValid[payload.index] = payload.newValidValue

      let editedProductParamsCount = 0
      for (let i = 0; i < this.editedProductParamsValid.length; i++) {
        if (this.editedProductParamsValid[i]) {
          editedProductParamsCount++
        }
      }
      this.editedProductParamsCount = editedProductParamsCount
    },
    updateSelect (payload) {
      this.$set(payload.productSelect, payload.prop, payload.newValue)
    },
    updateQuantity (payload) {
      this.editedProductQuantity = Number(payload.newValue)
      this.editedProductQuantityValid = payload.valid
    },
    resetForm () {
      this.editedProductParams = []
      this.editedProductParamsValid = []
      this.editedProductSelectParams = []
      this.editedProductQuantity = ''
    },
    resetInputs () {
      if (this.editedProductParams.length > 0) {
        for (let i = 0; i < this.$refs.inputEditParam.length; i++) {
          this.$refs.inputEditParam[i].reset()
        }
      }
      this.$refs.inputEditQuantity.reset()
    },
    onCancel () {
      this.dialog = false
    },
    onSave () {
      const product = {
        id: this.editedProductId,
        editedProductParams: this.editedProductParams,
        editedProductSelectParams: this.editedProductSelectParams,
        editedProductQuantity: this.editedProductQuantity
      }
      this.$store.dispatch('SAVE_CHANGES', product)

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
      'getSelectFieldByType'
    ]),
    hasSelectFields () {
      return this.editedProductSelectParams.length !== 0
    },
    inputsParamCompleted () {
      return this.editedProductParams.length === this.editedProductParamsCount
    },
    inputQuantityCompleted () {
      return this.editedProductQuantityValid
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
    },
    'cartItem.quantity': {
      handler (val) {
        this.editedProductQuantity = val
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
