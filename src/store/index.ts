import { createStore, Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    currencies: any[]
  }
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

export default createStore({
  state: {
    currencies: [] as any[]
  },
  mutations: {
    setCurrencies (state, value) {
      state.currencies = value
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getValues: state => state.currencies
  }
})
