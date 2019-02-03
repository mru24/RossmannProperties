<template>
  <div class="footerContainer">
    <!-- <img src="static/images/footer.jpg" alt="" width="100%"> -->
    <div class="content">
      <div class="row text-center">
        <div class="col6">
          <h1>Contact Us:</h1>
          <hr>
          <div class="line">
            <img src="static/images/phone.png" alt="phone icon">
            <p>01302 666-565</p>
          </div>
          <div class="line">
            <img src="static/images/map-marker-icon.png" alt="map location icon">
            <p>Address:</p>
          </div>
          <p>16 Somewhere Avenue</p>
          <p>Doncaster</p>
          <div class="line">
            <img src="static/images/email.png" alt="email icon">
            <p><a href="mailto:mru24@yahoo.com?subject=feedback">mru24@yahoo.com</a></p>
          </div>
          <div class="line">
            <img src="static/images/website.png" alt="www icon">
            <p>
              <a href="http://wwproject.eu" target="_blank" rel="noreferrer nofollow noopener">Visit Website</a>
            </p>
          </div>
        </div>
        <div class="col6">
          <h1>Follow Us:</h1>
          <hr>
          <div class="social">
            <img src="static/images/facebook.png" alt="Facebook icon">
            <img src="static/images/instagram.png" alt="Instagram icon">
            <img src="static/images/youtube.png" alt="Youtube icon">
            <img src="static/images/google_plus2.png" alt="Google+ icon">
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="sass">
@import 'config'
.footerContainer
  margin-top: 100px
  position: relative
  .content
    position: absolute
    padding: 150px 40px 40px 40px
    top: 0
    width: 100%
    z-index: 999
    background-image: url("../assets/footer.jpg")
    background-position: top right
    background-repeat: no-repeat
    background-size: cover
    &::after
      position: absolute
      top: -58px
      left: -5px
      width: 102%
      height: 100px
      content: ''
      background: white
      transform: rotate(3deg)
    .row
      @include bp-mobile
        display: block
      .col6
        color: white
        text-shadow: 0 0 15px black
        background: rgba(#363636, 0.36)
        margin: 20px
        align-self: stretch
        h1
          margin: 20px 0
        p
          font-size: 1.4em
          line-height: 2
        .line
          width: 60%
          margin: auto
          display: flex
          flex-direction: row
          align-items: center
          margin-bottom: 20px
          @include bp-mobileSM
            flex-direction: column
          img
            width: 35px
            margin-right: 10px
            position: relative
        .line:hover img
          animation: jump 3s
          p
        .social
          display: flex
          flex-direction: row
          justify-content: center
          align-items: center
          @include bp-mobileSM
            flex-direction: column
          img
            width: 80px
            margin: 10px
            &:hover
              animation: jump 3s

@keyframes jump
	0%,30%,80%,100%
    transform: translateY(0)
	10%
    transform: translateY(-20px)
	60%
    transform: translateY(-10px)
</style>
