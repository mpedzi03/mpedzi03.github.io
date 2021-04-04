<template>
  <div id="my-skills">
    <b-tabs
      justified
      v-model="tabIndex"
      content-class=""
      align="center"
      active-nav-item-class="active-skill-nav-item"
    >
      <b-tab
        v-for="concept in skillData"
        :key="concept.id"
        :title="concept.name"
        :title-link-class="linkClass(concept.id)"
      >
        <div class="canvas row">
          <div id="skills-header" class="col-12 col-lg-3">
            <h1><b-icon-flower1></b-icon-flower1></h1>
            <h1 class="px-3">My Skills</h1>
            <h1><b-icon-flower1></b-icon-flower1></h1>
          </div>
          <div id="skills-logo" class="col-12 col-lg-3 align-self-center">
            <img id="skill-image" :src="getImgURL(concept.imgURLParam)" alt="Logo Img">
          </div>
          <div id="skills-detail" class="col-12 col-lg-5 align-self-center py-3">
            <div>
              <p class="text-center"><strong>Description: </strong>{{concept.description}}</p>
              <p class="text-center"><strong>Experience: </strong>{{concept.experience}} years</p>
              <ul>
                <li v-for="note in concept.notes" :key="note">{{note}}</li>
              </ul>
            </div>
          </div>
        </div>
      </b-tab>
    </b-tabs>

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
        return ['inactive-skill-nav-item']
      }
    }
  }
}
</script>

<style lang="sass">
#skills-header
  display: flex
  flex-direction: column
  padding: 1rem 0 1rem 0
  justify-content: center
  align-items: center

#skill-image
  margin: 2rem 0 2rem 0
  border-radius: 5%
  border: 2px solid $font-color-primary
  alt: "Logo!"
  width: 20vw

@media only screen and (max-width: 991px)
  #skills-header
    flex-direction: row
  #skills-logo
    text-align: center
  #skill-image
    width: 40vw
    margin: 0 0 0 0
  #skills-detail
    padding-left: 1rem
    padding-right: 1rem

.active-skill-nav-item
  color: $font-color-light !important
  background-color: $font-color-dark !important
  border-color: $font-color-dark !important
  font-weight: bold
  text-transform: uppercase

.inactive-skill-nav-item
  color: $font-color-light !important
  background-color: $font-color-secondary !important
  border-color: $font-color-light !important

.rounded-img
  border-radius: 30px
  border: 2px solid $font-color-primary
</style>
