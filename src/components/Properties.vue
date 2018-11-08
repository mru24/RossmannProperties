<template>
  <div>
    <div class="container">
      <h2 class="titleBK">Our <span>Properties</span></h2>
      <div class="info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div class="properties">
        <div class="item" v-for="(prop, index) in properties" :key='index'>
          <img :src="'static/images/' + prop.image">
          <div class="itemInfo">
            {{ prop.info }}
          </div>
          <router-link :to="'/appointment'">
          <button>

              Book appointment

          </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      properties: [
        {
          name: 'Burns Villas',
          image: 'prop1.jpg',
          imageAlt: '',
          info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          active: true
        },
        {
          name: 'Orchid House',
          image: 'prop2.jpg',
          imageAlt: 'Photo by Benji Mellish from Pexels',
          info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          active: true
        },
        {
          name: 'Light Mansion',
          image: 'prop3.jpg',
          imageAlt: 'Photo by Sarah Jane from Pexels',
          info: 'Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          active: true
        },
        {
          name: 'Little House',
          image: 'prop4.jpg',
          imageAlt: '',
          info: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          active: true
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../components/config'

.info
  margin: 30px auto

.titleBK
  font-size: 38px

.properties
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-around
  .item
    position: relative
    width: 300px
    padding: 10px
    margin: 10px
    border: 1px solid #bbb
    border-radius: 4px
    @include bp-mobile
      margin: 5px
    @include bp-mobileSM
      width: 90%
    img
      width: 100%
    .itemInfo
      margin: 10px 0
      margin-bottom: 100px
    button
      position: absolute
      bottom: 10px
      left: 50%
      transform: translateX(-50%)
      display: block
      margin: auto

</style>
