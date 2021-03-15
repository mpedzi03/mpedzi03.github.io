<template>
  <div id="my-skills">
    <div>
      <div>
        <b-tabs
          v-model="tabIndex"
          content-class="my-3"
          align="center"
          active-nav-item-class="text-uppercase font-weight-bold text-danger"
        >
          <b-tab
            v-for="concept in skillData"
            :key="concept.id"
            :title="concept.name"
            :title-link-class="linkClass(concept.id)"
          >
            <div class="row no-gutters">
              <div id="skill-logo" class="col-12 col-sm-6 d-flex justify-content-center align-items-center">
                <img :src="getImgURL(concept.imgURLParam)" alt="Logo Img" width="375" height="225" class="rounded-img desktop-view">
                <img :src="getImgURL(concept.imgURLParam)" alt="Logo Img" width="225" height="135" class="rounded-img mobile-view">
              </div>
              <div id="skill-details" class="col-12 col-sm-6 d-flex justify-content-start">
                <div>
                  <p><strong>Description: </strong>{{concept.description}}</p>
                  <p><strong>Experience: </strong>{{concept.experience}} years</p>
                  <ul>
                    <li v-for="note in concept.notes" :key="note">{{note}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { skillData } from '@/common/mySkillsData.js'

export default {
  name: 'MySkills',
  data: function () {
    return {
      skillData,
      tabIndex: 0
    }
  },
  methods: {
    getImgURL(skill) {
      const images = require.context('../assets/skill-logos', false, /\.png$/)
      return images('./' + skill + '.png')
    },
    linkClass(id) {
      if (id !== this.tabIndex) {
        return ['bg-dark', 'text-light']
      }
    }
  }
}
</script>

<style lang="sass">
.rounded-img
  border-radius: 30px
  border: 2px solid purple

.nav-link
  color: #310c87

.skill-link
  color: #4D4814

</style>
