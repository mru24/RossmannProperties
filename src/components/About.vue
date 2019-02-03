<template>
  <div>
    <div class="banner">
      <!-- Photo by rawpixel.com from Pexels -->
      <h1>About Us</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col6 text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="col6">
          <img src="static/images/prop7.jpg" alt="" width="100%">
        </div>
      </div>
      <h2 class="titleBK">Your <span>Team</span></h2>
      <hr>
      <div class="team">
        <div class="person text-center" v-for="(person, index) in team" :key="index">
          <h2>{{ person.name }}</h2>
          <img :src="'static/images/' + person.image" alt="">
          <p>{{ person.position }}</p>
          <p>{{ person.info }}</p>
        </div>
      </div>
      <div class="takeCare">
        <h2 class="titleWT">Let us take care of your <span>next home</span></h2>
      </div>
      <hr>
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
      team: [
        {
          name: 'Mark',
          image: 'team1.jpg',
          position: 'Owner',
          info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          name: 'Tina',
          image: 'team2.jpg',
          position: 'Manager',
          info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          name: 'Lisa',
          image: 'team3.jpg',
          position: 'Sales manager',
          info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../components/config'

.banner
  background-image: url('../assets/about_bannerImage.jpg')
.container
  .row
    margin: 60px 0
    .col6
      p
        font-size: 1.5em
        line-height: 1.5

  .team
    display: flex
    @include bp-mobile
      flex-direction: column
      width: 60%
      margin: auto
    @include bp-mobileSM
      width: 100%
    .person
      margin: 10px
      h2
        margin: 20px
        border-bottom: 1px solid $orange
        font-size: 1.8em
      img
        width: 100%
      p
        font-size: 1.3em
        line-height: 1.5
        padding: 40px
        padding-top: 0

  .takeCare
    height: 400px
    background-image: url("../assets/takeCare.jpg")
    background-size: cover
    background-repeat: no-repeat
    background-attachment: fixed
    display: flex
    align-items: center
    justify-content: center
    margin: 40px 0
    position: relative
    &::after
      position: absolute
      bottom: -58px
      left: -5px
      width: 102%
      height: 100px
      content: ''
      background: white
      transform: rotate(3deg)
    &::before
      @extend .takeCare::after
      top: -58px
hr
  margin: 100px auto
footer

</style>
