<template>
  <div>
    <div class="container">
      <h2 class="title">Our <span>Properties</span></h2>
      <div class="info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div class="properties">
        <div class="item" v-for="(prop, index) in properties" :key='index'>
          <img :src="prop.image">
          <div class="itemInfo">
            {{ prop.info }}
          </div>
          <button>
            <router-link :to="'appointment'">
              Book appointment
            </router-link>
          </button>
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
          image: 'static/images/prop1.jpg',
          info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          active: true
        },
        {
          name: 'Orchid House',
          image: 'image to come',
          info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          active: true
        },
        {
          name: 'Light Mansion',
          image: 'image to come',
          info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          active: true
        },
        {
          name: 'Little House',
          image: 'image to come',
          info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
