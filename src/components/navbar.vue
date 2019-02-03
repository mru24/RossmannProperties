<template>
  <div>
    <nav class="nav" :class="navClassObject">
      <div class="navbar">
        <div class="logo">
          ROSSMAN
        </div>
        <ul :class="[ mobileShow ? 'mobileShow' : 'mobileHide' ]">
          <li v-for="(item, index) in navbar" :key="index">
            <router-link :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <div class="hamburger" v-if="navClassObject.mobile">
        <hamburger v-on:changeNav="changeNav"/>
      </div>
    </nav>
  </div>
</template>

<script>
import hamburger from './hamburger'

export default {
  components: {
    hamburger
  },
  data () {
    return {
      navClassObject: {
        'shrunk': false,
        'mobile': false
      },
      mobileShow: false,
      navbar: [
        {
          name: 'Home',
          link: '/',
          hover: false
        },
        {
          name: 'About',
          link: 'about',
          hover: false
        },
        {
          name: 'Services',
          link: 'services',
          hover: false
        },
        {
          name: 'Contact',
          link: 'contact',
          hover: false
        },
        {
          name: 'Login',
          link: 'login',
          hover: false
        }
      ]
    }
  },
  methods: {
    shrunk: function () {
      this.navClassObject.shrunk = true
    },
    expand: function () {
      this.navClassObject.shrunk = false
    },
    mobile: function () {
      this.navClassObject.mobile = !this.navClassObject.mobile
    },
    changeNav: function () {
      this.mobileShow = !this.mobileShow
    }
  },
  created () {
    let self = this
    window.addEventListener('scroll', function () {
      if (window.innerWidth > 750) {
        if (window.scrollY > 100) {
          self.shrunk()
        } else {
          self.expand()
        }
      }
    })
    if (window.innerWidth < 1050) {
      self.navClassObject.mobile = true
      self.mobileShow = false
    } else {
      self.navClassObject.mobile = false
      self.mobileShow = true
    }
    window.addEventListener('resize', function () {
      if (window.innerWidth < 1050) {
        self.navClassObject.mobile = true
        self.mobileShow = false
      } else {
        self.navClassObject.mobile = false
        self.mobileShow = true
      }
    })
  }
}
</script>

<style lang="sass" scoped>
@import 'config'

$height: 70px

.nav
  position: fixed
  z-index: 999
  top: 0
  left: 0
  width: 100%
  height: $height
  background: rgba(#605d5d, 0.4)
  color: white
  @include transition
  .navbar
    display: flex
    flex-direction: row
    justify-content: space-between
    .logo
      line-height: $height
      margin-left: 40px
      font-size: 40px
      font-weight: bolder
      font-family: 'Anton', sans-serif
      @include transition
    ul
      display: flex
      flex-direction: row
      align-items: center
      height: $height
      @include transition
      li
        a
          height: $height - 20
          font-size: 20px
          padding: 10px 20px
          margin-right: 10px
          color: #fff
          @include border-radius
          @include transition
          &:hover
            background: $orange !important

.shrunk
  height: $height - 30
  .navbar
    .logo
      line-height: $height - 30
      margin-left: 10px
      font-size: 20px
    ul
      display: flex
      flex-direction: row
      align-items: center
      height: $height - 30
      li
        a
          height: $height - 20 - 30
          font-size: 15px
          padding: 5px 10px
          margin-right: 5px

.mobile
  position: fixed
  z-index: 999
  top: 0
  left: 0
  width: 100%
  height: $height
  background: transparent
  color: white
  @include transition
  .navbar
    display: block
    .logo
      line-height: $height
      margin-left: 10px
      font-size: 30px
      font-weight: bolder
      font-family: 'Anton', sans-serif
      color: #299058
      @include transition
    ul
      position: fixed
      top: 0
      left: 0
      width: 100%
      flex-direction: column
      @include transition
      li
        width: 100%
        a
          $height: 80px
          display: block
          width: 100%
          height: $height
          line-height: $height
          font-size: 1.8em
          padding: 0
          padding-left: 40px
          background: rgba(#028518, 0.8)
          color: #c9c9c9
          border-radius: 0 !important
          @include transition
          &:hover
            color: white
        .router-link-exact-active
          background: rgba(#26a33b, 0.8)
          border-radius: 0
          color: white !important

.mobileShow
  display: flex !important

.mobileHide
  display: none !important

.router-link-exact-active
  background: white
  color: black !important
  &:hover
    color: white !important

.hamburger
  position: fixed
  top: 10px
  right: 10px
  width: 70px
  height: 70px

.v-enter-active, .v-leave-active
  transition: 1s
.v-enter, .v-leave-to
  transform: scale(0)
</style>
