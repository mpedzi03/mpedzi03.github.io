<template>
  <div id="my-work">
    <div class="row justify-content-center align-items-center no-gutters py-5">
      <div class="col-8" id="showcase-section">

      </div>
      <div class="col-4">
        <b-list-group>
          <b-list-group-item button @click="logClick" variant="success">Javascript</b-list-group-item>
          <b-list-group-item button @click="logClick" variant="success">Vue</b-list-group-item>
          <b-list-group-item button @click="logClick" variant="success">Java</b-list-group-item>
          <b-list-group-item button @click="logClick" variant="success">Maven</b-list-group-item>
          <b-list-group-item button @click="logClick" variant="success">Coldfusion</b-list-group-item>
          <b-list-group-item button @click="logClick" variant="success">ColdBox</b-list-group-item>
          <b-list-group-item button @click="logClick" variant="success">Python</b-list-group-item>
          <b-list-group-item button @click="logClick" variant="success">Django</b-list-group-item>
        </b-list-group>

        <hr>

        <b-list-group>
          <b-list-group-item button @click="logClick" variant="info">Postman</b-list-group-item>
          <b-list-group-item button @click="logClick" variant="info">Git</b-list-group-item>
          <b-list-group-item button @click="logClick" variant="info">Gitkraken</b-list-group-item>
          <b-list-group-item button @click="logClick" variant="info">Atlassian Software</b-list-group-item>
          <b-list-group-item button @click="logClick" variant="info">Jenkins</b-list-group-item>
          <b-list-group-item button @click="logClick" variant="info">Docker</b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyWork',
  data: function () {
    return {
    }
  },
  methods: {
    logClick (x) {
      console.log(x.target.innerText)
    }
  }
}
</script>

<style lang="sass">
#my-work
  // background-color: #6b5b95
  color: black

#my-work > div
  height: 100%
</style>
