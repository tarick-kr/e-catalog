export default {
  state: {
    viewCard: 0,
    loading: false,
    error: null
  },
  mutations: {
    TOGGLE_VIEW_TYPE_CATALOG (state) {
      state.viewCard ? state.viewCard = 0 : state.viewCard = 1
    },
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    SET_ERROR (state, payload) {
      state.error = payload
    },
    CLEAR_ERROR (state) {
      state.error = null
    }
  },
  actions: {
    TOGGLE_VIEW_TYPE_CATALOG ({ commit }) {
      commit('TOGGLE_VIEW_TYPE_CATALOG')
    },
    SET_LOADING ({ commit }, payload) {
      commit('SET_LOADING', payload)
    },
    SET_ERROR ({ commit }, payload) {
      commit('SET_ERROR', payload)
    },
    CLEAR_ERROR ({ commit }) {
      commit('CLEAR_ERROR')
    }
  },
  getters: {
    getViewType: (state) => state.viewCard,
    loading: (state) => state.loading,
    error: (state) => state.error
  }
}
