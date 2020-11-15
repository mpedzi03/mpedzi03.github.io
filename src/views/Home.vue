<template>
  <div id="home">
    <p>Home Page</p>
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from '../components/shared/NavbarCustom.vue'

export default {
  name: 'home',
  components: {
    Navbar
  }
}
</script>

<style lang="sass">
</style>
