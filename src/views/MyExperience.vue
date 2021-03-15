<template>
  <div id="my-experience">
    <p>Hello : )</p>

  </div>
</template>

<script>
export default {
  name: 'MyExperience',
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
#my-experience
</style>

/*
"Want to improve a skill quickly? Try explaining it to others. You may bypass a block and have it click faster."
"Don't always follow others' techniques. What works for them may not be the most efficient way for you. Find what works for you."
"Surround yourself with people you can learn from. You will naturally set the bar higher for yourself and make bigger leaps."
"Something taking too long to click? Look into a different piece of the same puzzle and work your way in."
*/