<template>
  <div id="home">
      <the-header/>
      <!-- <div id="social-nav-div">
        <the-social-nav/>
      </div> -->
      <div id="profile-div">
        <the-profile/>
      </div>
      <!-- <div id="main-nav-div">
        <the-main-nav/>
      </div> -->
      <!-- <div id="main-content-div">
        <router-view/>
      </div> -->
  </div>
</template>

<script>
import TheHeader from './components/shared/TheHeader.vue'
// import TheSocialNav from './components/shared/TheSocialNav.vue'
// import TheMainNav from './components/shared/TheMainNav.vue'
import TheProfile from './components/shared/TheProfile.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    // TheSocialNav,
    // TheMainNav,
    TheProfile
  },
  data: function () {
    return {
    }
  },
  computed: {
    currentPage () {
      return this.$route.name
    },
    currentBGImg () {
      return `assets/bg_${this.currentPage}.jpg`
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#home {
  display: grid
}

</style>

