<template>
  <div id="my-philosophies">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      controls
      indicators
      background="#82c1e0"
      :interval="8000"
      :img-width="1024"
      :img-height="500"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
  >
    <b-carousel-slide
      img-src="@/assets/carousel/chicago.png"
      text="Want to improve a skill quickly? Try explaining it to others. You may bypass a block and have it click faster."
    >
    </b-carousel-slide>

    <b-carousel-slide
      img-src="@/assets/carousel/tokyo.png"
      text="Don't always follow others' techniques. What works for them may not be the most efficient way for you. Find what works for you."
    >
    </b-carousel-slide>
    <b-carousel-slide
      img-src="@/assets/carousel/sanantonio.png"
      text="Surround yourself with people you can learn from. You will naturally set the bar higher for yourself and make bigger leaps."
    >
    </b-carousel-slide>
    <b-carousel-slide
      img-src="@/assets/carousel/shanghai.png"
      text="Something taking too long to click? Look into a different piece of the same puzzle and work your way in."
    >
    </b-carousel-slide>

  </b-carousel>

  </div>
</template>

<script>
export default {
  name: 'MyPhilosophies',
  data: function () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart () {
      this.sliding = true
    },
    onSlideEnd () {
      this.sliding = false
    }
  }
}
</script>

<style lang="sass">
#my-philosophies

.carousel-caption > p
  border-radius: 25px
  border: 1px #072d73 solid
  background-color: rgba(207,214,227,.8)
  color: #050505
  font-size: x-large

@media only screen and (max-width: 991px)
  .carousel-caption > p
    font-size: medium
</style>
