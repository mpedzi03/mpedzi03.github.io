<template>
  <div id="my-experience">
    <div class="d-flex justify-content-around align-items-center">
      <div>
        <p><strong>Accomplishments: </strong></p>
        <p>Bachelor's Degree in Computer Science from Lewis University
          <b-icon-map
            v-b-tooltip.hover
            title="Click to open in Google maps"
            class="icon"
            @click="openNewTab('https://goo.gl/maps/YwnEhjMcsvLPTkKV6')"
          >
          </b-icon-map>
        </p>
        <p>Published article about Python Forensics in eForensics
          <b-icon-newspaper
            v-b-tooltip.hover 
            title="Click to check out eForensics issue"
            class="icon"
            @click="openNewTab('https://eforensicsmag.com/download/open-source-tools-and-their-developers/')"
          >
          </b-icon-newspaper>
        </p>
        <p>{{experience}} days as a professional developer</p>
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
      experience: this.dateDifference(new Date('2018-10-30'), new Date())
    }
  },
  methods: {
    dateDifference (a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())

      return Math.floor((utc2 - utc1) / _MS_PER_DAY)
    },
    openNewTab (link) {
      window.open(link, '_blank')
      window.open(link, '_blank')
    }
  }
}
</script>

<style lang="sass">
#my-experience

.icon:hover
    cursor: pointer
</style>

/*
"Want to improve a skill quickly? Try explaining it to others. You may bypass a block and have it click faster."
"Don't always follow others' techniques. What works for them may not be the most efficient way for you. Find what works for you."
"Surround yourself with people you can learn from. You will naturally set the bar higher for yourself and make bigger leaps."
"Something taking too long to click? Look into a different piece of the same puzzle and work your way in."
*/