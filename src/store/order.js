import { db } from '../main'

export default {
  state: {
    currentDate: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  },
  mutations: {
    SAVE_DATA_CLIENT (state, payload) {
      state.currentDate = payload.currentDate
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.phone = payload.phone
      state.email = payload.email
    },
    CLEAR_DATA_CLIENT (state) {
      state.currentDate = ''
      state.firstName = ''
      state.lastName = ''
      state.phone = ''
      state.email = ''
    }
  },
  actions: {
    SAVE_DATA_CLIENT ({ commit }, dataClient) {
      commit('SAVE_DATA_CLIENT', dataClient)
    },
    async SEND_ORDER ({ commit }, order) {
      commit('CLEAR_ERROR')
      try {
        await db.collection('order').add(order)
        commit('SET_LOADING', false)
        commit('CLEAR_CART')
        commit('CLEAR_DATA_CLIENT')
        console.log('send-order')
      } catch (error) {
        commit('SET_ERROR', error.message)
        commit('SET_LOADING', false)
        throw error
      }
    },
    CLEAR_DATA_CLIENT ({ commit }) {
      commit('CLEAR_DATA_CLIENT')
    }
  },
  getters: {
    getDataClient: (state) => { return state }
  }
}
