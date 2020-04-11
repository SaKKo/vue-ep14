<template lang="html">
  <v-app-bar fixed app>
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title v-text="title" />
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vuetify.js'
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('set_drawer', !this.$store.state.drawer)
    }
  }
}
</script>

<style lang="css" scoped></style>
