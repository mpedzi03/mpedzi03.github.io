<template>
  <div class="container">
    <header>
      <div class="navbarcustom">
        <router-link to="home" tag="button">Home</router-link>
        <router-link disabled to="accomplishments" tag="button">Accomplishments</router-link>
        <router-link to="hobbies" tag="button">Hobbies</router-link>
        <router-link to="connect" tag="button">Connect</router-link>
        <router-link to="philosophies" tag="button">Philosophies</router-link>
      </div>
    </header>

    <section id="accomplishments">
      <p>Accomplishments Page</p>
    </section>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>

</style>
