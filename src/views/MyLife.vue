<template>
  <div id="my-life">
    <div class="row justify-content-center align-items-center no-gutters py-5">
      <div class="col-12 col-xl-5 px-5">
        <h3>About Me</h3>
        <p>I am an inquisitive person always on the journey of finding out how things work. When I am faced with a problem, I find a solution.
          When I find the solution, I work to improve it so that it is scalable, readable, and abides by the latest technological standards.
          To keep myself grounded and staying positive, I enjoy board and video games with friends, snowboarding, and keeping up on the latest world news.
        </p>
        <div class="d-none d-xl-block mt-5">
          <h5><strong>"Perfection is impossible, but you don't stop aiming for it."</strong></h5>
          <p>-Saquon Barkley</p>
        </div>
      </div>
      <the-profile class="col-12 col-xl-5"></the-profile>
      <div class="col-12 d-sm-block d-xl-none pt-3">
        <h5><strong>"Perfection is impossible, but you don't stop aiming for it."</strong></h5>
        <p>-Saquon Barkley</p>
      </div>
    </div>
  </div>
</template>

<script>
import TheProfile from '@/components/TheProfile.vue'
export default {
  name: 'MyLife',
  components: {
    TheProfile
  }
}
</script>

<style lang="sass">
#my-life
  background-color: #cfc8c8
  color: black

#my-life > div
  height: 100%
  text-align: center
</style>
