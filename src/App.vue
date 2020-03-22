<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" right class="hidden-sm-and-up" absolute temporary>
        <v-list flat>
          <v-list-item-group>
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Главная</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/catalog">
              <v-list-item-icon>
                <v-icon>mdi-library-books</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Каталог</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/cart">
              <v-list-item-icon>
                <v-icon>mdi-cart</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Корзина</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app color="primary" dark>
        <router-link to="/" tag="span" style="cursor:pointer">
          <v-toolbar-title>
            <div class="site-name-wrapper">
              <span class="site-name-title font-weight-bold display-1">LOGO</span>
            </div>
          </v-toolbar-title>
        </router-link>
        <v-spacer />
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"/>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn text to="/">
            <div class="btn-wrapper" >
              <v-icon size="30" class="ma-1">mdi-home</v-icon>
              <span class="top-bar_item--title">Главная</span>
            </div>
          </v-btn>
          <v-btn text to="/catalog">
            <div class="btn-wrapper" >
              <v-icon size="30" class="ma-1">mdi-note-multiple</v-icon>
              <span class="top-bar_item--title">Каталог</span>
            </div>
          </v-btn>
          <v-btn text to="/cart">
            <div class="btn-wrapper">
              <v-icon size="30" class="ma-1">mdi-cart</v-icon>
              <span class="top-bar_item--title">Корзина</span>
            </div>
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-content>
        <router-view/>
      </v-content>
      <v-footer color="primary" app>
        <div class="white--text mx-auto">
<!--          <span class="mr-2">Created by web-STar</span>-->
          <span>&copy; 2020</span>
        </div>
      </v-footer>
      <template v-if="error">
        <v-snackbar
          :multi-line="true"
          :timeout="5000"
          color="error"
          @input="closeError"
          value="true"
        >
          {{ error }}
          <v-btn
            dark
            text
            @click.native="closeError"
          >
            Close
          </v-btn>
        </v-snackbar>
      </template>
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data: () => ({
    drawer: false
  }),
  created () {
    this.$store.dispatch('FETCH_PRODUCTS')
  },
  methods: {
    closeError () {
      this.$store.dispatch('CLEAR_ERROR')
    }
  },
  computed: {
    ...mapGetters([
      'error',
      'loading'
    ])
  }
}
</script>

<style scoped lang="sass">
  .btn-wrapper
    display: flex
    flex-direction: column
  /*.v-toolbar__title*/
  /*  .site-name-wrapper*/
  /*    position: relative*/
  /*    span.site-name-title*/
  /*      font-size: 0.7rem*/
  /*      font-weight: bold*/
  /*      font-style: italic*/
  /*      position: absolute*/
  /*      top: 1rem*/
  /*      left: 0*/
  /*      letter-spacing: 0.05rem*/
  /*      color: yellow*/
  /*    span.site-name-on*/
  /*      font-weight: bold*/
  /*      font-size: 1.1rem*/
  /*      letter-spacing: 0.2rem*/
  /*      position: absolute*/
  /*      top: 0.6rem*/
  /*      right: 0*/
  /*    span.site-name-l*/
  /*      font-weight: bold*/
  /*      font-size: 2.8rem*/
  /*      font-style: italic*/
  /*      color: yellow*/
  /*      letter-spacing: 0.3rem*/
  /*    span.site-name-ine*/
  /*      letter-spacing: 0.2rem*/
  /*      color: yellow*/
  /*      font-style: italic*/
  /*    span.site-name-order*/
  /*      font-size: 1.1rem*/
  /*      font-weight: bold*/
  /*      letter-spacing: 0.35rem*/

  .top-bar_item--title
    text-align: center
    font-size: 0.5rem
</style>
