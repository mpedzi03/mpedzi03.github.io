<template>
  <div class="container">
    <header>
      <div class="navbarcustom">
        <router-link to="home" tag="button">Home</router-link>
        <router-link to="accomplishments" tag="button">Accomplishments</router-link>
        <router-link to="hobbies" tag="button">Hobbies</router-link>
        <router-link to="connect" tag="button">Connect</router-link>
        <router-link disabled to="philosophies" tag="button">Philosophies</router-link>
      </div>
    </header>

    <section id="philosophies">
      <p>Philosophies Page</p>
    </section>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>

</style>
