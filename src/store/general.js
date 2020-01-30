export default {
  state: {
    viewCard: 0
  },
  mutations: {
    TOGGLE_VIEW_TYPE_CATALOG (state) {
      state.viewCard ? state.viewCard = 0 : state.viewCard = 1
    }
  },
  actions: {
    TOGGLE_VIEW_TYPE_CATALOG ({ commit }) {
      commit('TOGGLE_VIEW_TYPE_CATALOG')
    }
  },
  getters: {
    getViewType: (state) => state.viewCard
  }
}
