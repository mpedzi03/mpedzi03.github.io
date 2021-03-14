<template>
  <div id="my-work">
    <div>
      <div>
        <b-tabs content-class="mt-3" align="center">
          <b-tab v-for="concept in workData" :key="concept.id" :title="concept.name">
            <div class="row">
              <div class="col-6">
                <img :src="getImgURL(concept.imgURLParam)" alt="Logo Img" width="375" height="225" style="border-radius: 30px; border: 2px solid purple;">
              </div>
              <div class="col-6"></div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import workData from '@/common/myWorkData.js'

export default {
  name: 'MyWork',
  data: function () {
    return {
      workData: workData
    }
  },
  computed: {
    activeSlideID () {
      return this.workData ? Math.floor(this.workData.length / 2) : 1
    }
  },
  methods: {
    logClick (x) {
      console.log(x.target.innerText)
    },
    getImgURL(skill) {
      const images = require.context('../assets/skill-logos', false, /\.png$/)
      console.log(images)
      console.log(images('./' + skill + '.png'))
      return images('./' + skill + '.png')
    }
  }
}
</script>

<style lang="sass" scoped>
#my-work
  // background-color: #6b5b95
  color: black

#my-work > div
  height: 100%
  text-align: center

.carousel
  width: 500px
</style>
