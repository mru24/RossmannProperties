<template>
  <div>
    <div class="banner">
      <!-- Photo by rawpixel.com from Pexels -->
      <h1>What we can do for you ...</h1>
    </div>
    <div class="container">
      <h2 class="titleBK">Our <span>Services</span></h2>
      <hr>
      <p>
        Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div class="services">
        <div class="service text-center" v-for="(service, index) in services" :key="index">
          <h1>{{ service.name }}</h1>
          <p>{{ service.info }}</p>
        </div>
      </div>
    </div>
    <footer>
      <appFooter />
    </footer>
  </div>
</template>

<script>
import appFooter from './Footer'

export default {
  components: {
    appFooter
  },
  data () {
    return {
      services: [
        {
          name: 'Sales',
          image: '',
          info: 'Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          name: 'Lettings',
          image: '',
          info: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          name: 'Valuation',
          image: '',
          info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          name: 'Surveys',
          image: '',
          info: 'Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          name: 'Mortgages',
          image: '',
          info: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        },
        {
          name: 'Insurance',
          image: '',
          info: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'
        },
        {
          name: 'Conveyancing',
          image: '',
          info: 'Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
@import 'config'

.banner
  background-image: url('../assets/services_bannerImage2.jpg')

.container
  .services
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
    align-items: stretch
    .service
      width: 400px
      margin: 40px
      padding: 25px
      background: #07b5c1
      color: white
      h1
        margin-bottom: 20px
        padding-bottom: 8px
        border-bottom: 1px solid $orange
      p
        font-size: 1.2em
        line-height: 1.4

</style>
