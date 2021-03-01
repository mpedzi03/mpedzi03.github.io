<template>
  <b-navbar toggleable="lg" type="light" sticky>
    <b-navbar-brand href="#">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" @click="makeActiveSection('my-life')">About Me</b-nav-item>
        <b-nav-item href="#" @click="makeActiveSection('my-work')">My Work</b-nav-item>
        <b-nav-item href="#" @click="makeActiveSection('my-philosophies')">My Philosophies</b-nav-item>
        <!-- <b-nav-item href="#" @click="makeActiveSection('my-life')">Resume</b-nav-item> -->
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown id="contact-dropdown" text="Contact Me" right>
          <b-dropdown-item target="_blank" href="https://www.facebook.com/michael.pedzimaz.96/"> Facebook <b-icon icon="facebook"/></b-dropdown-item>
          <b-dropdown-item target="_blank" href="https://twitter.com/MichaelPedzima1"> Twitter <b-icon icon="twitter"/></b-dropdown-item>
          <b-dropdown-item target="_blank" href="https://www.linkedin.com/in/michael-pedzimaz-698715126/"> LinkedIn <b-icon icon="linkedin"/></b-dropdown-item>
          <b-dropdown-item target="_blank" href="https://github.com/mpedzi03"> Github <b-icon icon="github"/></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
	name: 'TheMainNav',
	methods: {
    async makeActiveSection (section) {
      this.removeAnimations()

      const selectedActiveElement = document.getElementById(section)
      selectedActiveElement.classList.add('animate-section')
      await this.sleep(500)
      const activeElement = document.getElementById('active-section')

      const activeElementChild = activeElement.firstElementChild

      if (activeElementChild) {
        activeElement.insertAdjacentElement('afterend', activeElementChild)
      }

      activeElement.appendChild(selectedActiveElement)
    },
    removeAnimations () {
      const myLifeEl = document.getElementById('my-life')
      myLifeEl.classList.remove('animate-section')

      // const myWorkEl = document.getElementById('my-work')
      // myWorkEl.classList.remove('animate-section')

      const myPhilosophiesEl = document.getElementById('my-philosophies')
      myPhilosophiesEl.classList.remove('animate-section')
    },
    sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
	}
}
</script>

<style lang="sass">
.navbar
  background-color: #cfc8c8
</style>