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
        <v-list-item-subtitle>{{ this.shortDescription }}</v-list-item-subtitle>
        <v-divider v-show="!emptySelectParam"/>
        <v-list-item-subtitle>{{  }}</v-list-item-subtitle>
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
  name: 'ProductInCart',
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
      shortDescription: ''
    }
  },
  mounted () {
    this.itemInCartQuantity = this.itemInCart.quantity
    this.makeSymbolDescription(this.itemInCart)
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
    makeShortDescriptionParam (type, params, sequence, angle) {
      let arrayDescriptionParam = []
      let shortDescriptionParam = ''
      if (sequence.length > 1) {
        for (let i = 0; i < sequence.length; i++) {
          for (let j = 0; j < params.length; j++) {
            if (sequence[i] === params[j].sym) {
              switch (type) {
                case 'Type1': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].sym + ' ' + params[j].value + ' / ')
                  } else if (i > 0 && i < sequence.length - 1) {
                    arrayDescriptionParam.push(params[j].sym + ' ' + params[j].value + ' / ')
                  } else {
                    arrayDescriptionParam.push(params[j].value)
                  }
                  break
                }
                case 'Type2': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].sym + ' ' + params[j].value + ' / ')
                  } else if (i > 0 && i < sequence.length - 1) {
                    arrayDescriptionParam.push(params[j].sym + ' ' + params[j].value + ' / ')
                  } else {
                    arrayDescriptionParam.push(params[j].sym + ' ' + params[j].value)
                  }
                  break
                }
                case 'Type3': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].sym + ' ' + params[j].value + ' / ')
                  } else if (i > 0 && i < sequence.length - 1) {
                    arrayDescriptionParam.push(params[j].sym + ' ' + params[j].value + ' / ')
                  } else {
                    arrayDescriptionParam.push(params[j].sym + ' ' + params[j].value + ' / ' + angle)
                  }
                  break
                }
                case 'Type4': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  }
                  break
                }
                case 'Type5': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  }
                  break
                }
                case 'Type6': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + angle)
                  }
                  break
                }
                case 'Type7': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + params[j].sym + ' ' + params[j].value)
                  }
                  break
                }
                case 'Type8': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 2) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  }
                  break
                }
                case 'Type9': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 2) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 3) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 4) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  }
                  break
                }
                case 'Type10': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i > 1 && i < sequence.length - 1) {
                    arrayDescriptionParam.push(' / ' + params[j].sym + ' ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  }
                  break
                }
                case 'Type11': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i > 1 && i < sequence.length - 1) {
                    arrayDescriptionParam.push(' / ' + params[j].sym + ' ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + angle)
                  }
                  break
                }
                case 'Type12': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 2) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 3) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + params[j].sym + ' ' + params[j].value)
                  }
                  break
                }
                case 'Type13': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 2) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 3) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i > 3 && i < sequence.length - 1) {
                    arrayDescriptionParam.push(' / ' + params[j].sym + ' ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  }
                  break
                }
                case 'Type14': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 2) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 3) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 4) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 5) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i > 5 && i < sequence.length - 1) {
                    arrayDescriptionParam.push(' / ' + params[j].sym + ' ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  }
                  break
                }
                case 'Type15': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 2) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 3) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + angle)
                  }
                  break
                }
                case 'Type16': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 2) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 3) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 4) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 5) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  }
                  break
                }
                default:
                  arrayDescriptionParam.push('oops')
              }
            }
          }
        }
      } else if (sequence.length === 1) {
        switch (type) {
          case 'Type1' || 'Type2': {
            arrayDescriptionParam.push(' - ' + params[0].sym + ' ' + params[0].value)
            break
          }
          case 'Type3': {
            arrayDescriptionParam.push(' - ' + params[0].sym + ' ' + params[0].value + ' / ' + angle)
            break
          }
          default:
        }
      } else {
        arrayDescriptionParam = []
      }
      shortDescriptionParam = arrayDescriptionParam.join('')
      return shortDescriptionParam
    },
    makeSymbolDescription (itemInCart) {
      let type = itemInCart.shortDescriptionType
      let shortTitle = itemInCart.shortTitle
      let params = itemInCart.productParams
      let sequence = itemInCart.sequence
      let angle = itemInCart.angle ? itemInCart.angle : 0

      let shortDescriptionParam = this.makeShortDescriptionParam(type, params, sequence, angle)
      this.shortDescription = shortTitle + shortDescriptionParam
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
