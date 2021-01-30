<template>
  <div class="container-fluid">
    <div class="row">
      <the-header/>
    </div>
    <div class="row ">
      <div class="col-1" id="social-nav-div">
        <the-social-nav/>
      </div>
      <div class="col-3" id="profile-div">
        <the-profile/>
      </div>
      <div class="col-1" id="main-nav-div">
        <the-main-nav/>
      </div>
      <div class="col-7" id="main-content-div">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/shared/TheHeader.vue'
import TheSocialNav from './components/shared/TheSocialNav.vue'
import TheMainNav from './components/shared/TheMainNav.vue'
import TheProfile from './components/shared/TheProfile.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheSocialNav,
    TheMainNav,
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

body {
  background-image: url('assets/bg_home.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
}

#social-nav-div, #main-content-div, #main-nav-div, #profile-div {
  margin-top: 3em;
}
#social-nav-div {
  border-bottom: 2px solid black;
  border-right: 2px solid black;
}
#main-content-div {
  border-top: 2px solid black;
}
#main-nav-div {
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
}
#profile-div {
  border-top: 2px solid black;
}

// .nav {
//   position: sticky;
//   top: 0;
// }

#profile-div {
  display: flex;
  justify-content: center;
  align-items:center;
}

.nav-item {
  // background-color: green;
  border: 8px outset #f3f1f1;
  // border-radius: 10px;
  background: white;
  margin-bottom: 30px;
  font-size: 15px;
  text-align: center;

  .active {
    // border-radius: 10px;
    // background:#29293d;
    background: #29293d;
    border: 6px inset #f3f1f1;
  }

  :hover {
    // border-radius: 10px;
    background: #f4f1f1;
  }
}

.nav-link {
  color: #29293d;
  font-weight: bold;
}

.nav-link.disabled {
  color: white !important;
}

@media screen and (max-width: 1000px) {
  .nav-button-text {
    display: none;
  }
}

</style>

