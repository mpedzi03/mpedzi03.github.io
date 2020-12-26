<template>
  <div class="navbarcustom">
    <router-link v-if="this.currentRouteName != 'home'" to="home" tag="button">Home</router-link>
    <router-link v-if="this.currentRouteName != 'accomplishments'" to="accomplishments" tag="button">Accomplishments</router-link>
    <router-link v-if="this.currentRouteName != 'hobbies'" to="hobbies" tag="button">Hobbies</router-link>
    <router-link v-if="this.currentRouteName != 'connect'" to="connect" tag="button">Connect</router-link>
    <router-link v-if="this.currentRouteName != 'philosophies'" to="philosophies" tag="button">Philosophies</router-link>
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

</style>
