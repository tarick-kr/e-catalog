<template>
  <v-container>
    <v-row>
      <v-card width="100%">
        <v-list>
          <template v-for="(item, index) in this.getProductsInCart">
            <v-divider
              v-if="index > 0"
              :key="item.id"
            >
            </v-divider>
            <v-list-item
              :key="index"
            >
              <v-list-item-avatar>
                <v-img :src="item.imageProduct"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  <v-row>
                    <v-col cols="11">
                      <symbol-description :itemInCart="item"></symbol-description>
                    </v-col>
                    <v-col cols="1">
                      <v-list-item-subtitle>{{ item.quantity }}</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import SymbolDescription from '../cart/SymbolDescription'

export default {
  name: 'ListProductsInOrder',
  components: {
    SymbolDescription
  },
  methods: {

  },
  computed: {
    ...mapGetters([
      'getProductsInCart'
    ])
  }
}
</script>

<style scoped>

</style>
