<template>
  <div>
    <!-- <the-header></the-header> -->
    <router-view/>
  </div>
</template>

<script>
// import TheHeader from './components/shared/TheHeader.vue'

export default {
  name: 'App',
  // components: {
  //   TheHeader
  // },
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
  background-image: url('assets/backgroundImg.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
}

.navbarcustom {
  height: 4rem;
  width: 50rem;
  background-image: url('assets/NavbarAbstract.jpg');
  background-size: cover;
  margin: auto;
  margin-top: 2em;
  // padding-top: 2em;

  button {
    border-radius: 8px;
    background-color: #FCBA12;
    width: 8.5em;
    margin-left: .5em;
    margin-right: .5em;
    margin-top: 1em;
    margin-bottom: 1em;
  }
}
</style>
