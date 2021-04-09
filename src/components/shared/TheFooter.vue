<template>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      controls
      indicators
      background="#82c1e0"
      :interval="100000"
      :img-width="1024"
      :img-height="500"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="@/assets/carousel/chicago.png"></b-carousel-slide>
      <b-carousel-slide img-src="@/assets/carousel/tokyo.png"></b-carousel-slide>
      <b-carousel-slide img-src="@/assets/carousel/sanantonio.png"></b-carousel-slide>
      <b-carousel-slide img-src="@/assets/carousel/shanghai.png"></b-carousel-slide>

    </b-carousel>
</template>

<script>
export default {
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
@media only screen and (max-width: 991px)
  .carousel-caption > p
    font-size: medium
</style>
