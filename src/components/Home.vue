<template>
  <div>
    <div class="banner">
      <h1>FIND YOUR DREAM HOME</h1>
      <router-link :to="'about'">
        <button>
          View More
        </button>
      </router-link>
    </div>
    <div class="container">
      <Properties />
    </div>
    <div class="info_space">
      <div class="container">
        <h2 class="titleWT">Lorem <span>Ipsum</span></h2>
        <h1>Excellent Experience</h1>
        <p>
          Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="customerRev">
        <h1 class="titleBK">Customer <span>Reviews</span></h1>
        <div class="sliderContainer">
          <ul>
            <li v-for="(rev, index) in revs" :key="index">
              <img :src="rev.image" alt="Reviewer image">
              <p>
                {{ rev.review }}
              </p>
              <h4>
                {{ rev.name }}
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Properties from './Properties'

export default {
  components: {
    Properties
  },
  data () {
    return {
      revs: [
        {
          name: 'Alan',
          image: 'image',
          review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          name: 'Paul',
          image: 'image',
          review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          name: 'Ingrid',
          image: 'image',
          review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]
    }
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

.info_space
  height: 500px
  margin: 60px 0
  padding: 80px 0
  background-color: #291d73
  position: relative
  overflow: hidden
  @include bp-mobile
    padding: 70px 20px
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
    @extend .info_space::after
    top: -58px
  .container
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    color: white

.titleWT
  font-size: 38px
  margin: 0
  @include bp-mobile
    font-size: 22px
h1
  font-size: 58px
  margin: 0
  @include bp-mobile
    font-size: 30px

// Customer reviews
.container
  // background: green
  .customerRev
    // background: blue
    .sliderContainer
      width: 80%
      margin: 40px auto
      background: teal
      ul
        width: 100%
        height: 250px
        position: relative
        overflow: hidden
        li
          width: 100%
          position: absolute
          &:nth-child(1)
            top: 0
            left: 0
          &:nth-child(2)
            top: 0
            left: 100%
          &:nth-child(3)
            top: 0
            left: 100%
</style>
