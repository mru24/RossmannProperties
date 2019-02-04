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

<style lang="sass" scoped>

// @import './components/config'

</style>
