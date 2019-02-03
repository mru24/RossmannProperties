<template>
  <div class="footerContainer">
    <img src="static/images/footer.jpg" alt="" width="100%">
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
.footerContainer
  margin-top: 200px
  position: relative
  &::after
    position: absolute
    top: -58px
    left: -5px
    width: 102%
    height: 100px
    content: ''
    background: white
    transform: rotate(3deg)
  .content
    position: absolute
    padding: 150px 40px 40px 40px
    top: 0
    z-index: 999
</style>
