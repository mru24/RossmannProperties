<template>
  <div>
    <nav>
      <div :class="logoClassObject">
        Rossmann
      </div>
      <div :class="navClassObject">
        <ul>
          <li v-for="(item, index) in navbar" :key="index" @mouseenter="item.hover=true" @mouseleave="item.hover=false">
            <router-link :to="item.link" :class="[item.hover ? onHover : '']">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div :class="mobileNavClassObject">
        <transition name="mobileNav">
          <ul v-if="showNav">
            <li v-for="(item, index) in navbar" :key="index" @mouseenter="item.hover=true" @mouseleave="item.hover=false">
              <router-link :to="item.link" :class="[item.hover ? onHover : '']">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </transition>
      </div>
      <div class="hamburger">
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
      logoClassObject: {
        'logo': true,
        'mobileLogo': false,
        'collapseLogo': false
      },
      navClassObject: {
        'nav': true,
        'collapseNav': false
      },
      mobileNavClassObject: {
        'mobileNav': true
      },
      isActive: false,
      showNav: false,
      onHover: 'onHover',
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
    changeNav: function () {
      this.showNav = !this.showNav
    },
    collapse: function () {
      this.navClassObject.collapseNav = true
      this.logoClassObject.collapseLogo = true
    },
    expand: function () {
      this.navClassObject.collapseNav = false
      this.logoClassObject.collapseLogo = false
    }
  },
  created () {
    let self = this
    window.addEventListener('scroll', function () {
      if (window.innerWidth > 750) {
        if (window.scrollY > 100) {
          self.collapse()
        } else {
          self.expand()
        }
      }
    })
  }
}
</script>

<style lang="sass" scoped>
@import 'config'

$height: 60px

nav
  position: fixed
  z-index: 9999
  top: 0
  left: 0
  width: 100%
  height: $height
  line-height: $height
  display: flex
  flex-direction: row
  justify-content: space-between

// Navbar
.nav
  margin-right: 30px
  font-weight: 600
  @include transition
  @include bp-mobile
    display: none
  ul
    text-align: right
    li
      display: inline-block
      a
        display: block
        font-size: 23px
        height: $height - 10px
        line-height: $height - 10px
        margin: 0 15px
        padding: 0 20px
        border-radius: 6px
        color: white
        @include transition
        @include bp-mobile
          font-size: 19px
          padding: 0 8px
          margin: 0 8px

.mobileNav
  position: fixed
  top: 0
  left: 0
  width: 100%
  margin: auto
  font-weight: 600
  display: none
  @include bp-mobile
    display: block
  ul
    text-align: center
    background: rgba(#0d8307, 0.9)
    li
      display: block
      a
        display: block
        font-size: 23px
        height: 60px
        line-height: 60px
        margin: 0 15px
        padding: 0 20px
        border-radius: 6px
        color: white

.collapseNav
  margin-right: 10px
  font-weight: 600
  width: 100%
  background: rgba(#383838, 0.3)
  @include transition
  ul
    text-align: right
    li
      display: inline-block
      a
        display: block
        font-size: 18px
        height: $height - 20px
        line-height: $height - 20px
        margin: 0 10px
        padding: 0 10px
        border-radius: 6px
        color: white
        @include transition
        @include bp-mobile
          font-size: 17px
          padding: 0 8px
          margin: 0 8px

// Brand Logo
.logo
  padding-left: 30px
  font-family: 'Anton', sans-serif
  font-size: 48px
  letter-spacing: 1px
  color: white
  @include transition
  @include bp-mobile
    font-size: 38px
.mobileLogo
  position: fixed
  z-index: -1
  padding-left: 10px
  font-family: 'Anton', sans-serif
  font-size: 28px
  letter-spacing: 1px
  color: white
.collapseLogo
  padding-left: 10px
  background: rgba(#383838, 0.3)
  font-family: 'Anton', sans-serif
  font-size: 28px
  letter-spacing: 1px
  color: white
  @include transition
  @include bp-mobile
    font-size: 28px
    background: none
    text-shadow: 0 0 15px #444

.onHover
  transform: translateY(5px)
  background: white
  color: black !important
  @include transition

.router-link-exact-active
  background: white
  color: black !important

.hamburger
  position: fixed
  top: 10px
  right: 10px
  width: 70px
  height: 70px
  display: none
  @include bp-mobile
    display: block

.mobileNav-enter-active, .mobileNav-leave-active
  transition: transform 1s
.mobileNav-enter, .mobileNav-leave-to
  transform: translateY(-100%)

</style>
