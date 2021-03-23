<template>
  <div id="my-life" class="row no-gutters">
    <div id="life-header" class="col-12 col-lg-3">
      <h1><b-icon-flower2></b-icon-flower2></h1>
      <h1 class="px-3">My Life</h1>
      <h1><b-icon-flower2></b-icon-flower2></h1>
    </div>
    <div id="life-picture" class="col-12 col-lg-3 my-auto">
      <img id="profile-image" src="@/assets/img/profile_picture_large.jpg">
    </div>
    <div id="life-main" class="col-12 col-lg-5 align-self-center py-3">
      <h3 class="text-center"><strong>About Me</strong></h3>
      <p>I am an inquisitive person always on the journey of finding out how things work. When I am faced with a problem, I find a solution.
        When I find the solution, I work to improve it so that it is scalable, readable, and abides by the latest technological standards.
        To keep myself grounded and staying positive, I enjoy board and video games with friends, snowboarding, and keeping up on the latest world news.
      </p>
      <div class="text-center">
        <h5><strong>"Perfection is impossible, but you don't stop aiming for it."</strong></h5>
        <p>-Saquon Barkley</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLife'
}
</script>

<style lang="sass">
#my-life
  border-top-width: 5px
  border-top-style: solid
  border-top-color: $font-color-heading
  border-bottom-width: 5px
  border-bottom-style: solid
  border-bottom-color: $font-color-heading
#life-header
  display: flex
  flex-direction: column
  padding: 1rem 0 1rem 0
  justify-content: center
  align-items: center

#profile-image
  margin: 2rem 0 2rem 0
  border-radius: 5%
  border: 2px solid $font-color-heading
  alt: "Me"
  width: 20vw

@media only screen and (max-width: 991px)
  #life-header
    flex-direction: row
  #life-picture
    text-align: center
  #profile-image
    width: 50vw
    margin: 0 0 0 0
  #life-main
    padding-left: 1rem
    padding-right: 1rem

@media only screen and (max-width: 576px)
  #profile-image
    width: 75vw

// #life-header, #life-main, #life-picture
//   flex-basis: 1

// #profile-image
//   width: 30vw

// @media screen and (max-width: 1200px)
//   #profile-image
//     width: 60vw
</style>
