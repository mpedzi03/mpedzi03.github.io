<template>
  <div id="main" class="container-fluid px-0">
    <the-navbar/>
    <the-banner/>

    <div id="active-section"></div>

    <my-life/>
    <my-work/>
    <my-philosophies/>

    <the-footer/>
  </div>
</template>

<script>
import TheNavbar from '@/components/shared/TheNavbar.vue'
import TheBanner from '@/components/shared/TheBanner.vue'
import MyLife from '@/views/MyLife.vue'
import MyWork from '@/views/MyWork.vue'
import MyPhilosophies from '@/views/MyPhilosophies.vue'
import TheFooter from '@/components/shared/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheBanner,
    TheNavbar,
    MyLife,
    MyWork,
    MyPhilosophies,
    TheFooter
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

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center

body
  background: url('./assets/bg/whitesimple.jpg') no-repeat center center fixed
  -webkit-background-size: cover
  -moz-background-size: cover
  -o-background-size: cover
  background-size: cover

.content-block
    display: flex
    align-items: center
    justify-content: center

#active-section
  > div
    animation-name: slidein
    animation-duration: 1s

.animate-section
    animation-name: slideout
    animation-duration: 1s
    animation-fill-mode: forwards

@keyframes slidein
  from
    margin-left: 100%
    width: 300%

  to
    margin-left: 0%
    width: 100%

@keyframes slideout
  from
    margin-left: 0%
    width: 100%

  to
    margin-left: 100%
    width: 300%
</style>
