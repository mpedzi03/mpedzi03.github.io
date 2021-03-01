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
      text="Having trouble learning something? Try explaining it to others. You may bypass a block and have it click faster."
    >
    </b-carousel-slide>

    <b-carousel-slide 
      img-src="@/assets/carousel/tokyo.png"
      text="Don't always follow others' techniques. What works for them may not be the most efficient way for you. Practice makes perfect."
    >
    </b-carousel-slide>
    <b-carousel-slide 
      img-src="@/assets/carousel/sanantonio.png"
      text=""
    >
    </b-carousel-slide>
    <b-carousel-slide 
      img-src="@/assets/carousel/shanghai.png"
      text="Here is some text"
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
    onSlideStart (slide) {
      console.log(slide)
      this.sliding = true
    },
    onSlideEnd (slide) {
      console.log(slide)
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
  background-color: rgba(10,8,8,.8)
  color: white
  font-size: large
</style>
