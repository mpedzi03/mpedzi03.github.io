<template>
  <!-- <div id="container" :style="{ backgroundImage: require(`@assets/bg/${$route.meta.backgroundImage}`) }"> -->
  <div id="container" :style="{ backgroundColor: 'green' }">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
</style>

