<template>
  <div>
    <div class="container">
      <h2 class="titleBK">Our <span>Properties</span></h2>
      <hr>
      <div class="info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div class="properties">
        <div class="item" v-for="(prop, index) in properties" :key='index'>
          <img :src="'static/images/' + prop.image">
          <h2>{{ prop.name }}</h2>
          <div class="itemInfo">
            {{ prop.info }}{{prop.active}}
          </div>
          <!-- <router-link :to="'/appointment'"> -->
            <button @click="prop.active=true">Book appointment</button>
          <!-- </router-link> -->
          <transition name="bookModal">
            <div class="bookApp" v-if="prop.active">
              <p class="close" @click="prop.active=false">Close</p>
              <div class="modalContent">
                <h3>Property: {{ prop.name }}</h3>
                <form @submit.prevent="bookApp">
                  <input type="text" name="" value="" placeholder="Your name">
                  <input type="text" name="" value="" placeholder="Your telephone number">
                  <input type="text" name="" value="" placeholder="Your email">
                  <textarea name="name" placeholder="Additional information"></textarea>
                  <button type="submit">Book appointment</button>
                </form>
              </div>
            </div>
          </transition>
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
          active: false
        },
        {
          name: 'Orchard House',
          image: 'prop2.jpg',
          imageAlt: 'Photo by Benji Mellish from Pexels',
          info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          active: false
        },
        {
          name: 'Light Mansion',
          image: 'prop3.jpg',
          imageAlt: 'Photo by Sarah Jane from Pexels',
          info: 'Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          active: false
        },
        {
          name: 'Little House',
          image: 'prop4.jpg',
          imageAlt: '',
          info: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          active: false
        },
        {
          name: 'Orchid mansion',
          image: 'prop5.jpg',
          imageAlt: '',
          info: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          active: false
        },
        {
          name: 'Crossroads Cottage',
          image: 'prop6.jpg',
          imageAlt: '',
          info: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          active: false
        }
      ]
    }
  },
  methods: {
    bookApp () {
      // alert('Appointment has been booked. Thank You')
      let content = document.querySelector('.modalContent')
      content.innerHTML = '<h4>Your appointment has been booked. Thank You</h4>'
      content.classList.add('flex')
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
    width: 30%
    margin: 20px 5px
    @include bp-mobile
      width: 40%
    @include bp-mobileSM
      width: 100%
    img
      width: 100%
    h2
      text-align: center
      margin: 10px 0
    .itemInfo
      margin: 10px 0
      margin-bottom: 100px
      font-weight: 400
      text-align: center
    button
      position: absolute
      bottom: 10px
      left: 50%
      transform: translateX(-50%)
      display: block
      margin: auto
    .bookApp
      position: fixed
      z-index: 999
      top: 10%
      left: 10%
      width: 80%
      height: 85%
      background: rgba(#ffffff, 0.95)
      border: 1px solid $borderCol
      padding: 15px
      color: black
      @include bp-mobileSM
        left: 5%
        top: 15%
        width: 90%
      .close
        text-align: right
        font-size: 28px
        font-weight: bold
        color: $orange
        border-bottom: 1px solid $borderCol
        margin-bottom: 15px
        cursor: pointer
        @include transition
        &:hover
          color: $orange - 50
      form
        width: 100%
        padding: 20px 0
        input, textarea
          width: 100%
          display: block
          margin-bottom: 20px
          padding-left: 10px
          background: #f5f5f5
          color: black
          border: 1px solid $borderCol
          transition: .4s
          &:focus
            background: #eee
            color: black
        input
          height: 25px
          &:focus
            height: 35px
        textarea
          resize: none
          height: 120px
      .flex
        display: flex
        align-items: center
        justify-content: center
        height: 100%

.bookModal-enter-active, .bookModal-leave-active
  transition: .6s
.bookModal-enter, .bookModal-leave-to
  transform: scale(0)
</style>
