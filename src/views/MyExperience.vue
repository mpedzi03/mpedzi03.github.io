<template>
  <div id="my-experience">
    <div class="row">
      <div class="col">
        <h4><strong>Education: </strong><em>Lewis University - Romeoville, IL</em></h4>
        <p>Bachelor's Degree in Computer Science</p>
        <p>Minor in Cyber Security</p>
      </div>
      <div class="col">
        <h4><strong>Professional Experience: </strong></h4>
        <p>730 days as Junior Application Developer</p>
        <p>{{experience}} days as Application Developer II</p>
      </div>
    </div>
  </div>
</template>

<script>
const _MS_PER_DAY = 1000 * 60 * 60 * 24

export default {
  name: 'MyExperience',
  data: function () {
    return {
      experience: this.dateDifference(new Date('2020-10-30'), new Date())
    }
  },
  methods: {
    dateDifference (a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())

      return Math.floor((utc2 - utc1) / _MS_PER_DAY)
    },
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