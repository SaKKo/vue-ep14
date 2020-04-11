<template>
  <v-app dark>
    <Sidebar></Sidebar>
    <Topbar></Topbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Global/Sidebar'
import Topbar from '@/components/Global/Topbar'
import Footer from '@/components/Global/Footer'
export default {
  components: {
    Sidebar,
    Topbar,
    Footer
  }
}
</script>
