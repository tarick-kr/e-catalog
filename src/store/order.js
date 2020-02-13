export default {
  state: {
    currentDate: '',
    firstName: '',
    lastName: '',
    phone: ''
  },
  mutations: {
    SAVE_DATA_CLIENT (state, payload) {
      state.currentDate = payload.currentDate
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.phone = payload.phone
    }
  },
  actions: {
    SAVE_DATA_CLIENT ({ commit }, dataClient) {
      commit('SAVE_DATA_CLIENT', dataClient)
    }
  },
  getters: {
    getDataClient: (state) => { return state }
  }
}
