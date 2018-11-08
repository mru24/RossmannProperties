<template>
  <div>
    <div class="banner">
      <h1>FIND YOUR DREAM HOME</h1>
      <button>
        <router-link :to="'about'">
          View More
        </router-link>
      </button>
    </div>
    <div class="container">
      <Properties />
    </div>
  </div>
</template>

<script>
import Properties from './Properties'

export default {
  components: {
    Properties
  }

}
</script>

<style lang="sass" scoped>
@import '../components/config'

.banner
  background-image: url('../assets/bannerImage.jpg')
  button
    margin-top: 40px
    max-width: 300px

</style>
