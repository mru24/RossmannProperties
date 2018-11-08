<template>
  <div>
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar'
export default {
  components: {
    navbar
  },
  methods: {
    alert: function (e) {
      alert(e)
    }
  },
  created () {
    window.addEventListener('resize', function () {
      this.alert('Please refreash your browser after resizing')
    })
  }
}
</script>

<style lang="sass">

@import './components/config'

</style>
