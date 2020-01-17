import Vue from 'vue'
import Vuex from 'vuex'

import general from './general'
import products from './products'
import cart from './cart'
import order from './order'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    general,
    products,
    cart,
    order
  }
})
