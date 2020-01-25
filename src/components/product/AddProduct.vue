<template>
  <v-dialog v-model="dialog" max-width="760px">
    <template v-slot:activator="{ on }">
      <v-btn fab dark x-small color="success" v-on="on" elevation="0">
        <v-icon dark>mdi-cart-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-center background-card-title px-1 px-sm-2 px-md-4 mb-4">
        <span class="headline font-weight-bold mx-auto white--text">Воздуховод спирально-навивной</span>
      </v-card-title>
      <v-img
        class="mb-4"

        aspect-ratio="5"
        contain
      />
      <div class="text-center px-1 px-sm-2 px-md-4">
        <v-divider class="divider-width-align"/>
      </div>
      <v-card-text class="px-1 px-sm-2 px-md-4">
        <v-container>
          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                label="Длина L, м"
                hint="от 0.1 м до 6 м"
                persistent-hint
                required
              />
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                label="Диаметр d, мм"
                hint="от 100 мм до 1000 мм"
                persistent-hint
                required
              />
            </v-col>
          </v-row>
        </v-container>
        <div class="text-center px-1 px-sm-2 px-md-4">
          <v-divider class="divider-width-align"/>
        </div>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-select
                label="Толщина металла s, мм"
                required
                :items="['0.5', '0.55', '0.6', '0.7', '1.0']"
              />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select
                label="Тип металла"
                required
                :items="['Оц. сталь', 'Нерж. сталь']"
              />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select
                label="Тип соединения"
                required
                :items="['Фланец №20', 'Фланец №30', 'Нет']"
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
        >Закрыть
          <v-icon right size="21">close</v-icon>
        </v-btn>
        <v-btn

          color="blue darken-1"
          class="white--text"
          small
        >
          Сохранить
          <v-icon right size="19">save</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'AddProduct',
  props: ['productId', 'categoryId'],
  data () {
    return {
      dialog: false
    }
  },
  components: {

  },
  mounted () {

  },
  methods: {

  },
  computed: {
    // product () {
    //   const categoryId = this.categoryId
    //   const productId = this.productId
    //   return this.$store.getters.getProductById(categoryId, productId)
    // }
  }
}
</script>

<style scoped>

</style>
