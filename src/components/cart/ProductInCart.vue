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
        <symbol-description :itemInCart="this.itemInCart"></symbol-description>
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
import SymbolDescription from './SymbolDescription'

export default {
  name: 'ProductInCart',
  props: {
    itemInCart: {
      type: Object,
      required: false
    }
  },
  components: {
    EditProduct,
    SymbolDescription
  },
  data () {
    return {
      itemInCartQuantity: ''
    }
  },
  mounted () {
    this.itemInCartQuantity = this.itemInCart.quantity
  },
  methods: {
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
    descriptionProductSelectParam () {
      return this.itemInCartDescriptionSelectParams.join(' / ')
    },
    disabledBtnDecrement () {
      return !this.itemInCartQuantity || this.itemInCartQuantity === 1
    }
  }
}
</script>
