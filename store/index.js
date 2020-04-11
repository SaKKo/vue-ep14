export const state = () => ({
  drawer: false
})

export const mutations = {
  set_drawer(state, newVal) {
    state.drawer = newVal
  }
}
