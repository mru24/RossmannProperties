<template>
  <div id="hamburger" :class="classObject" @mouseenter="hoverOn" @mouseleave="hoverOff" @click="toggleStage">
    <i></i>
    <i></i>
    <i></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classObject: {
        'burger': true,
        'st1': false,
        'st2': false,
        'hover': false
      }
    }
  },
  methods: {
    hoverOn () {
      this.classObject.hover = true
    },
    hoverOff () {
      this.classObject.hover = false
    },
    toggleStage () {
      if (this.classObject.st2) {
        this.classObject.st2 = false
      }
      this.classObject.hover = !this.classObject.hover
      this.classObject.st1 = !this.classObject.st1
      this.$emit('changeNav')
      if (this.classObject.st1) {
        setTimeout(() => {
          this.classObject.st2 = !this.classObject.st2
        }, 1000)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'config'
$rotate1: 135deg
$rotate3: 45deg
.burger
  position: relative
  z-index: 9999
  width: 100%
  height: 100%
  cursor: pointer
  i
    display: block
    width: 100%
    height: 3px
    position: absolute
    transition: .3s
    // bars color
    background: #fff
    box-shadow: 2px 2px 10px #444
    &:nth-child(1)
      top: 20px
    &:nth-child(2)
      top: 50%
    &:nth-child(3)
      bottom: 18px

.st1
  i
    &:nth-child(2)
      opacity: 0
    &:nth-child(1)
      transform: rotate(176deg)
      top: 48%
    &:nth-child(3)
      transform: rotate(-176deg)
      top: 52%

.st2
  i
    &:nth-child(2)
      opacity: 0
    &:nth-child(1)
      transform: rotate($rotate1)
      top: 50%
    &:nth-child(3)
      transform: rotate($rotate3)
      top: 50%

.hover
  i
    &:nth-child(1)
      transform: translate3d(0, -6px, 0)
    &:nth-child(3)
      transform: translate3d(0, 6px, 0)

.burger.st1.hover
  i
    &:nth-child(1)
      transform: rotate($rotate1 - 5)
    &:nth-child(3)
      transform: rotate($rotate3 + 5)

</style>
