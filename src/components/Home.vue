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
        <h2 class="titleWT">More than 20 years' <span>experience</span></h2>
        <hr>
        <div class="row">
          <div class="col8">
            <p>
              Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="col4">
            <img src="static/images/suits.jpg" alt="" width="100%">
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="customerRev">
        <h1 class="titleBK">Customer <span>Reviews</span></h1>
        <hr>
        <div class="sliderContainer">
          <ul>
            <li v-for="(rev, index) in revs" :key="index">
              <div class="row">
                <div class="col3">
                  <img :src="'static/images/'+rev.image" alt="Reviewer image">
                </div>
                <div class="col9">
                  <h2>
                    {{ rev.name }} <span>from:</span> {{ rev.city }}
                  </h2>
                </div>
              </div>
              <p>
                {{ rev.review }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer>
      <appFooter />
    </footer>
  </div>
</template>

<script>
import Properties from './Properties'
import appFooter from './Footer'

export default {
  components: {
    Properties,
    appFooter
  },
  data () {
    return {
      revs: [
        {
          name: 'Christine',
          city: 'Chester',
          image: 'person1.jpg',
          review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          name: 'Alan',
          city: 'Bolton',
          image: 'person3.jpg',
          review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          name: 'Paul',
          city: 'London',
          image: 'person4.jpg',
          review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          name: 'Ingrid',
          city: 'Doncaster',
          image: 'person2.jpg',
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
  height: auto
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
    .col8
      p
        font-size: 1.5em
        line-height: 1.5
        font-weight: 200
        padding: 10px
    .col4
      img
        position: relative
        z-index: 99
        border-radius: 50%
        @include bp-mobileSM
          display: block
          width: 70%
          margin: auto

// Customer reviews
.container
  .customerRev
    .sliderContainer
      width: 80%
      margin: 40px auto
      ul
        width: 100%
        height: 300px
        position: relative
        overflow-y: scroll
        border: 1px solid #d5d5d5
        background: #fafafa
        li
          width: 100%
          height: auto
          span
            font-size: .7em
            font-weight: 400
            margin: 0 5px
          img
            width: 200px
            border-radius: 50%
          p
            padding: 30px 60px
            font-size: 1.4em
            text-align: center
footer
  // height: 180vh
  background: #393939
</style>
