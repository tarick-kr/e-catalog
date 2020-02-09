<template>
  <v-card
    style="cursor:pointer"
    class="mx-auto mb-3"
    max-width="600"
    outlined
    hover
  >
    <v-list-item three-line :to="'/cart/detail-product/' + itemInCart.id">
      <v-list-item-content>
        <v-list-item-title class="title mb-1">{{ itemInCart.titleProduct }}</v-list-item-title>
        <v-list-item-subtitle>{{ this.symbolDescription }}</v-list-item-subtitle>
        <v-divider v-show="!emptySelectParam"/>
        <v-list-item-subtitle>{{ this.descriptionProductSelectParam }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="120" v-if="$vuetify.breakpoint.smAndUp">
        <v-img :src="itemInCart.imageProduct"/>
      </v-list-item-avatar>
    </v-list-item>
    <v-divider class="mx-5"/>
    <v-container style="cursor: default">
      <v-row justify="center">
        <v-col cols="6" class="px-0 px-sm-1">
          <div style="text-align: center">
            <v-btn
              class="px-0 px-sm-3"
              style="min-width: 32px"
              text
              small
              outlined
              :disabled="disabledBtnDecrement"
              @click="decrement"
            >
              <v-icon>remove</v-icon>
            </v-btn>
            <span class="mx-sm-5">{{ this.itemInCartQuantity }} шт</span>
            <v-btn
              class="px-0 px-sm-3"
              style="min-width: 32px"
              text
              small
              outlined
              @click="increment"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-divider class="mx-5"/>
    <v-card-actions class="px-4" style="cursor: default">
      <edit-product :cartItem="this.itemInCart"/>
      <v-btn class="my-2" color="red accent-4" outlined small @click="remove">
        удалить
        <v-icon size="18" right>delete_forever</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import EditProduct from '../../components/product/EditProduct'

export default {
  name: 'ProductInCart2',
  props: {
    itemInCart: {
      type: Object,
      required: false
    }
  },
  components: {
    EditProduct
  },
  data () {
    return {
      itemInCartProductParams: [],
      itemInCartProductSelectParams: [],
      itemInCartDescriptionParam: [],
      itemInCartDescriptionSelectParams: [],
      itemInCartQuantity: '',
      symbolDescription: ''
    }
  },
  mounted () {
    // for (let i = 0; i < this.itemInCart.productParams.length; i++) {
    //   this.itemInCartProductParams.push({
    //     name: this.itemInCart.productParams[i].name,
    //     sym: this.itemInCart.productParams[i].sym,
    //     unit: this.itemInCart.productParams[i].unit,
    //     value: this.itemInCart.productParams[i].value
    //   })
    // }
    // for (let i = 0; i < this.itemInCartProductParams.length; i++) {
    //   this.itemInCartDescriptionParam.push(this.itemInCartProductParams[i].name + ' ' + this.itemInCartProductParams[i].sym + ' - ' + this.itemInCartProductParams[i].value + this.itemInCartProductParams[i].unit)
    // }
    // for (let i = 0; i < this.itemInCart.productSelectParams.length; i++) {
    //   this.itemInCartProductSelectParams.push({
    //     name: this.itemInCart.productSelectParams[i].name,
    //     sym: this.itemInCart.productSelectParams[i].sym,
    //     unit: this.itemInCart.productSelectParams[i].unit,
    //     value: this.itemInCart.productSelectParams[i].value
    //   })
    // }
    // for (let i = 0; i < this.itemInCartProductSelectParams.length; i++) {
    //   if (this.itemInCart.productSelectParams[i].sym) {
    //     this.itemInCartDescriptionSelectParams.push(this.itemInCartProductSelectParams[i].name + ' ' + this.itemInCartProductSelectParams[i].sym + ' - ' + this.itemInCartProductSelectParams[i].value + this.itemInCartProductSelectParams[i].unit)
    //   } else {
    //     this.itemInCartDescriptionSelectParams.push(this.itemInCartProductSelectParams[i].name + ' - ' + this.itemInCartProductSelectParams[i].value)
    //   }
    // }
    this.itemInCartQuantity = this.itemInCart.quantity
    this.makeSymbolDescription(this.itemInCart.shortDescriptionType, this.itemInCart.shortTitle, this.itemInCart.productParams, this.itemInCart.productSelectParams)
  },
  watch: {
    // 'cartItem.quantity': {
    //   handler (val) {
    //     this.quantity = val
    //   }
    // },
    // 'cartItem.productParams': {
    //   handler () {
    //     this.productParams = []
    //     for (let i = 0; i < this.cartItem.productParams.length; i++) {
    //       this.productParams.push({
    //         name: this.cartItem.productParams[i].name,
    //         sym: this.cartItem.productParams[i].sym,
    //         unit: this.cartItem.productParams[i].unit,
    //         value: this.cartItem.productParams[i].value
    //       })
    //     }
    //     this.descriptionParam = []
    //     for (let i = 0; i < this.productParams.length; i++) {
    //       this.descriptionParam.push(this.productParams[i].name + ' ' + this.productParams[i].sym + ' - ' + this.productParams[i].value + this.productParams[i].unit)
    //     }
    //   },
    //   deep: true
    // },
    // 'cartItem.productSelectParams': {
    //   handler () {
    //     this.productSelectParams = []
    //     for (let i = 0; i < this.cartItem.productSelectParams.length; i++) {
    //       this.productSelectParams.push({
    //         name: this.cartItem.productSelectParams[i].name,
    //         sym: this.cartItem.productSelectParams[i].sym,
    //         unit: this.cartItem.productSelectParams[i].unit,
    //         value: this.cartItem.productSelectParams[i].value
    //       })
    //     }
    //     this.descriptionSelectParams = []
    //     for (let i = 0; i < this.productSelectParams.length; i++) {
    //       if (this.cartItem.productSelectParams[i].sym) {
    //         this.descriptionSelectParams.push(this.productSelectParams[i].name + ' ' + this.productSelectParams[i].sym + ' - ' + this.productSelectParams[i].value + this.productSelectParams[i].unit)
    //       } else {
    //         this.descriptionSelectParams.push(this.productSelectParams[i].name + ' - ' + this.productSelectParams[i].value)
    //       }
    //     }
    //   },
    //   deep: true
    // }
  },
  methods: {
    initParamValue (arrayParams, keyValue) {
      return arrayParams.find(param => param.sym === keyValue)
    },
    initSelectParamValue (arrayParams, paramName) {
      let param = arrayParams.find(param => param.name === paramName)
      return param !== 'undefined' ? param : ''
    },
    makeShortTypeMetal (typeMetal) {
      let shortTypeMetal
      if (typeMetal.value === 'Оц. сталь') {
        shortTypeMetal = 'оц.ст. '
      } else if (typeMetal.value === 'Нерж. сталь') {
        shortTypeMetal = 'нерж.ст. '
      }
      return shortTypeMetal
    },
    makeShortConnectionType (connectionType) {
      let shortConnectionType
      if (connectionType.value === 'Фланец R20') {
        shortConnectionType = ' / R20'
      } else if (connectionType.value === 'Фланец R30') {
        shortConnectionType = ' / R30'
      } else {
        shortConnectionType = ''
      }
      return shortConnectionType
    },
    makeShortCasing (casing) {
      let shortCasing
      if (casing.value === 'Да') {
        shortCasing = ' + окожушка'
      } else if (casing.value === 'Нет') {
        shortCasing = ''
      }
      return shortCasing
    },
    makeSymbolDescription (type, shortTitle, params, selectParams) {
      let symbolDescription
      switch (type) {
        case 'Type1': {
          let d = this.initParamValue(params, 'd')
          let L = this.initParamValue(params, 'L')
          let typeMetal = this.initSelectParamValue(selectParams, 'Тип металла')
          let thicknessMetal = this.initSelectParamValue(selectParams, 'Толщина металла')
          let connectionType = this.initSelectParamValue(selectParams, 'Тип соединения')
          let casing = this.initSelectParamValue(selectParams, 'Изготовить окожушку')
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          let shortCasing = this.makeShortCasing(casing)
          symbolDescription = shortTitle + ' - ' + 'd ' + d.value + ' / ' + L.value + ' (' + shortTypeMetal + thicknessMetal.value + shortConnectionType + ')' + shortCasing
          break }
        case 'Type2': {
          let d = this.initParamValue(params, 'd')
          let typeMetal = this.initSelectParamValue(selectParams, 'Тип металла')
          let thicknessMetal = this.initSelectParamValue(selectParams, 'Толщина металла')
          let connectionType = this.initSelectParamValue(selectParams, 'Тип соединения')
          let casing = this.initSelectParamValue(selectParams, 'Изготовить окожушку')
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          let shortCasing = this.makeShortCasing(casing)
          symbolDescription = shortTitle + ' - ' + 'd ' + d.value + ' (' + shortTypeMetal + thicknessMetal.value + shortConnectionType + ')' + shortCasing
          break }
        case 'Type3': {
          let d1 = this.initParamValue(params, 'd1')
          let d2 = this.initParamValue(params, 'd2')
          let typeMetal = this.initSelectParamValue(selectParams, 'Тип металла')
          let thicknessMetal = this.initSelectParamValue(selectParams, 'Толщина металла')
          let connectionType = this.initSelectParamValue(selectParams, 'Тип соединения')
          let casing = this.initSelectParamValue(selectParams, 'Изготовить окожушку')
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          let shortCasing = this.makeShortCasing(casing)
          symbolDescription = shortTitle + ' - ' + 'd1 ' + d1.value + ' / ' + 'd2 ' + d2.value + ' (' + shortTypeMetal + thicknessMetal.value + shortConnectionType + ')' + shortCasing
          break }
        case 'Type4': {
          let d = this.initParamValue(params, 'd')
          let typeMetal = this.initSelectParamValue(selectParams, 'Тип металла')
          let thicknessMetal = this.initSelectParamValue(selectParams, 'Толщина металла')
          let connectionType = this.initSelectParamValue(selectParams, 'Тип соединения')
          let casing = this.initSelectParamValue(selectParams, 'Изготовить окожушку')
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          let shortCasing = this.makeShortCasing(casing)
          symbolDescription = shortTitle + ' - ' + 'd ' + d.value + ' / 45° (' + shortTypeMetal + thicknessMetal.value + shortConnectionType + ')' + shortCasing
          break }
        case 'Type5': {
          let d1 = this.initParamValue(params, 'd1')
          let d2 = this.initParamValue(params, 'd2')
          let f = this.initParamValue(params, 'f')
          let typeMetal = this.initSelectParamValue(selectParams, 'Тип металла')
          let thicknessMetal = this.initSelectParamValue(selectParams, 'Толщина металла')
          let connectionType = this.initSelectParamValue(selectParams, 'Тип соединения')
          let casing = this.initSelectParamValue(selectParams, 'Изготовить окожушку')
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          let shortCasing = this.makeShortCasing(casing)
          symbolDescription = shortTitle + ' - ' + 'd1 ' + d1.value + ' / ' + 'd2 ' + d2.value + ' / ' + 'f ' + f.value + ' (' + shortTypeMetal + thicknessMetal.value + shortConnectionType + ')' + shortCasing
          break }
        case 'Type6': {
          let D = this.initParamValue(params, 'D')
          let d = this.initParamValue(params, 'd')
          let typeMetal = this.initSelectParamValue(selectParams, 'Тип металла')
          let thicknessMetal = this.initSelectParamValue(selectParams, 'Толщина металла')
          let connectionType = this.initSelectParamValue(selectParams, 'Тип соединения')
          let casing = this.initSelectParamValue(selectParams, 'Изготовить окожушку')
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          let shortCasing = this.makeShortCasing(casing)
          symbolDescription = shortTitle + ' - ' + 'D ' + D.value + ' / ' + 'd ' + d.value + ' / 45° (' + shortTypeMetal + thicknessMetal.value + shortConnectionType + ')' + shortCasing
          break }
        case 'Type7':
          break
        case 'Type8':
          break
        case 'Type9':
          break
        case 'Type10':
          break
        case 'Type11': {
          let d1 = this.initParamValue(params, 'd1')
          let d2 = this.initParamValue(params, 'd2')
          let h = this.initParamValue(params, 'h')
          let f = this.initParamValue(params, 'f')
          let L = this.initParamValue(params, 'L')
          let typeMetal = this.initSelectParamValue(selectParams, 'Тип металла')
          let thicknessMetal = this.initSelectParamValue(selectParams, 'Толщина металла')
          let connectionType = this.initSelectParamValue(selectParams, 'Тип соединения')
          let casing = this.initSelectParamValue(selectParams, 'Изготовить окожушку')
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          let shortCasing = this.makeShortCasing(casing)
          symbolDescription = shortTitle + ' - ' + 'd1 ' + d1.value + ' / ' + 'd2 ' + d2.value + ' / ' + 'h ' + h.value + ' / ' + 'f ' + f.value + ' / ' + L.value + ' (' + shortTypeMetal + thicknessMetal.value + shortConnectionType + ')' + shortCasing
          break }
        case 'Type12':
          break
        case 'Type13':
          break
        case 'Type14':
          break
        case 'Type15':
          break
        case 'Type16':
          break
        case 'Type17':
          break
        case 'Type18':
          break
        case 'Type19':
          break
        case 'Type20':
          break
        case 'Type21':
          break
        case 'Type22':
          break
        case 'Type23':
          break
        case 'Type24':
          break
        case 'Type25':
          break
        case 'Type26':
          break
        default:
          console.log('case--')
      }
      this.symbolDescription = symbolDescription
    },
    decrement () {
      this.$store.dispatch('DECREMENT', this.product.id)
    },
    increment () {
      this.$store.dispatch('INCREMENT', this.product.id)
    },
    remove () {
      this.$store.dispatch('REMOVE_PRODUCT', this.product.id)
    }
  },
  computed: {
    emptySelectParam () {
      return this.itemInCart.productSelectParams.length === 0
    },
    // descriptionProductParam () {
    //   return this.itemInCartDescriptionParam.join(' / ')
    // },
    descriptionProductSelectParam () {
      return this.itemInCartDescriptionSelectParams.join(' / ')
    },
    disabledBtnDecrement () {
      return !this.itemInCartQuantity || this.itemInCartQuantity === 1
    }
  }
}
</script>
