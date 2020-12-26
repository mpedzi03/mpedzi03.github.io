<template>
  <div class="container-fluid" id="home">
    <header class="navbarcustom">
      <router-link disabled to="home" tag="button">Home</router-link>
      <router-link to="accomplishments" tag="button">Accomplishments</router-link>
      <router-link to="hobbies" tag="button">Hobbies</router-link>
      <router-link to="connect" tag="button">Connect</router-link>
      <router-link to="philosophies" tag="button">Philosophies</router-link>
    </header>

    <section>
      <p>Home Page</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
#home {
  // height: 100vh;
  // background-color: $navbarcolor;
  // background-image: url('../assets/backgroundImg.jpg');
  // background-size: cover;
}
</style>
