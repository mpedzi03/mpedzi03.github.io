<template>
  <div id="my-experience">
    <div class="canvas row">
      <div id="experience-header" class="col-12 col-lg-3">
          <h1><b-icon-flower3></b-icon-flower3></h1>
          <h1 class="px-3">My Deeds</h1>
          <h1><b-icon-flower3></b-icon-flower3></h1>
      </div>
      <div id="experience-details" class="accordion col-12 col-lg-6 offset-lg-2 my-4" role="tablist">

        <b-card no-body class="mb-1">

          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1>education</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                  <p>Achieved Bachelor's degree in Computer Science from Lewis University with Alpha Sigma Lambda status
                  <b-icon-map
                    v-b-tooltip.hover
                    title="Click to open in Google maps"
                    class="icon"
                    @click="openNewTab('https://goo.gl/maps/YwnEhjMcsvLPTkKV6')"
                  >
                  </b-icon-map>
                </p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2>publishing</b-button>
          </b-card-header>
          <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <p>Published article in eForensics magazine demonstrating various Python digital forensics tools such as a file/drive keyword searching program and image file metadata extraction
                  <b-icon-newspaper
                    v-b-tooltip.hover
                    title="Click to check out eForensics issue"
                    class="icon"
                    @click="openNewTab('https://eforensicsmag.com/download/open-source-tools-and-their-developers/')"
                  >
                  </b-icon-newspaper>
                </p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3>career</b-button>
          </b-card-header>
          <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <p>Going on {{experience}} days as a professional developer where I'm learning and teaching modern techniques and tooling in multiple areas of the software development lifecycle</p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-4>sharing</b-button>
          </b-card-header>
          <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <p>Hosted and contributed to lunch & learns on exciting topics such as VueJS and RESTful API development</p>

                <p>Participated in a few company sponsored Hackathons, where I was part of an awesome team that was able to introduce new and exciting ideas to the business and IT team. One year we
                  brought to the table a slick customer facing mobile app built using the Ionic framework and Cordova. The following year we introduced a business facing software management system SPA built
                  using VueJS.
                </p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-5>teaching</b-button>
          </b-card-header>
          <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <p>Honored to be one of the Unit and Integration testing aficionados in our developer group</p>
                <p>I enjoy helping coworkers do their best to reach 100% code coverage, not just by testing every block of code, but by testing every piece of logic.</p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

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
    }
  },
  computed: {
    experience () {
      return this.dateDifference(new Date('2018-10-30'), new Date())
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
    }
  }
}
</script>

<style lang="sass" scoped>
// #my-experience
//   border-top-width: 5px
//   border-top-style: solid
//   border-top-color: $font-color-primary
//   border-bottom-width: 5px
//   border-bottom-style: solid
//   border-bottom-color: $font-color-primary

#experience-header
  display: flex
  flex-direction: column
  padding: 1rem 0 1rem 0
  justify-content: center
  align-items: center

@media only screen and (max-width: 991px)
  #experience-header
    flex-direction: row
  #experience-details
    padding: 0rem 1rem 0rem 1rem

.icon:hover
    cursor: pointer

button
  background-color: $font-color-primary
  color: $font-color-dark
button:hover
  background-color: #ebdd4d
  color: $font-color-dark
button:active
  background-color: $font-color-dark !important
  color: $font-color-primary !important
  border-color: $font-color-primary !important
button:focus
  background-color: $font-color-dark
  font-weight: bold
  text-transform: uppercase
  color: $font-color-primary
  border-color: $font-color-primary !important
#experience-details > div
  background-color: $font-color-dark

</style>

/*
"Want to improve a skill quickly? Try explaining it to others. You may bypass a block and have it click faster."
"Don't always follow others' techniques. What works for them may not be the most efficient way for you. Find what works for you."
"Surround yourself with people you can learn from. You will naturally set the bar higher for yourself and make bigger leaps."
"Something taking too long to click? Look into a different piece of the same puzzle and work your way in."


Links
vue architecture : https://imagizer.imageshack.com/img923/6175/78cUox.png
*/