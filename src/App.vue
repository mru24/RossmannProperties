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
  }
}
</script>

<style lang="sass">

@import './components/config'

</style>
