<template>
  <div class="navbarcustom">
    <router-link v-if="this.currentRouteName != 'home'" to="home" tag="button">Home</router-link>
    <router-link v-if="this.currentRouteName != 'deeds'" to="deeds" tag="button">Deeds</router-link>
    <router-link v-if="this.currentRouteName != 'hobbies'" to="hobbies" tag="button">Hobbies</router-link>
    <router-link v-if="this.currentRouteName != 'connect'" to="connect" tag="button">Connect</router-link>
    <router-link v-if="this.currentRouteName != 'ideals'" to="ideals" tag="button">Ideals</router-link>
  </div>
</template>

<script>
// import '../styles/_variables.sass'

export default {
  computed: {
    currentRouteName () {
      return this.$route.name
    }
  }
}
</script>

<style lang="sass">
.navbarcustom
  height: 2.5rem
  width: 40rem
  background-image: url('../../assets/NavbarAbstract.jpg')
  background-size: cover
  margin: auto

button
  border-radius: 8px
  background-color: #FCBA12


.navbarcustom {
  height: 4rem;
  width: 50rem;
  background-color: black;
  // background-image: url('assets/NavbarAbstract.jpg');
  // background-size: cover;
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
