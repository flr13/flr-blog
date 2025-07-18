import { createStore } from 'vuex'

export default ({ app }) => {
  // Create a new store instance
  const store = createStore({
    state() {
      return {}
    },
    mutations: {},
    actions: {},
    getters: {}
  })

  // Make sure to use the store instance
  app.use(store)
}