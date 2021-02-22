<template>
  <div id="profile-section">
    <img id="profile-image" src="../../assets/profile_picture_8.jpg" height="250">
    <div>
      <b-button id="contact-button" v-b-toggle.collapse-1 variant="primary" :pressed="contactBtnPressed" @click="contactBtnPressed = !contactBtnPressed">Contact Me!</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <div id="profile-contact">
          <b-list-group horizontal>
            <b-list-group-item tag="a" target="_blank">
              Facebook <b-icon icon="facebook"/>
            </b-list-group-item>
            <b-list-group-item tag="a" target="_blank">
              Twitter <b-icon icon="twitter"/>
            </b-list-group-item>
          </b-list-group>
          <b-list-group horizontal>
            <b-list-group-item tag="a" target="_blank">
              LinkedIn <b-icon icon="linkedin"/>
            </b-list-group-item>
            <b-list-group-item tag="a" target="_blank">
              Github <b-icon icon="github"/>
            </b-list-group-item>
          </b-list-group>
        </div>
        <!-- <b-nav vertical>
          <b-nav-item href=""><b-icon icon="paperclip"/><br>Resume</b-nav-item>
        </b-nav> -->
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TheProfile',
    data: function () {
      return {
        contactBtnPressed: false
      }
    }
}
</script>

<style lang="sass">
#profile-image
   border-radius: 5%
   border: 5px solid black
   alt: "Should be a picture of me.. Awkward."
   text-align: center

#profile-contact
  width: 25rem

#contact-button
  width: 250px
  background-color: #89adc7
  color: #ffffff

#contact-button:hover
  background-color: #7692a6

#contact-button:active
  background-color: #536069

#contact-button .active
  background-color: #dddddd

</style>