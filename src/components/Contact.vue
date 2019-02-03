<template>
  <div>
    <div class="banner">
      <h1>Contact Us</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col6">
          <img src="static/images/phone.png" alt="Phone icon">
          <p>
            Sales: <span>0799938474</span>
          </p>
          <p>
            Lettings: <span>0799938345</span>
          </p>
          <p>
            Mortgage: <span>0799938345</span>
          </p>
          <p>
            Other: <span>0799938555</span>
          </p>
          <img src="static/images/email.png" alt="Email icon">
          <p><a href="mailto:mark@rossmann.com?subject=feedback">Email Mark</a></p>
          <p><a href="mailto:tina@rossmann.com?subject=feedback">Email Tina</a></p>
          <p><a href="mailto:lisa@rossmann.com?subject=feedback">Email Lisa</a></p>
        </div>
        <div class="col6">
          <form>
            <h2 class="titleBK">Send a <span>message</span></h2>
            <p>
              <label>Your name*</label>
              <input type="text">
            </p>
            <p>
              <label>Your email*</label>
              <input type="text">
            </p>
            <p>
              <label>Your telephone*</label>
              <input type="text">
            </p><p>
              <label>Your message</label>
              <textarea></textarea>
            </p>
            <button type="submit" name="submit">Send</button>
            <small>* required</small>
          </form>
        </div>
      </div>
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

    }
  }
}
</script>

<style lang="sass">
@import 'config'

.banner
  background-image: url('../assets/contact_bannerImage2.jpg')

.container
  .row
    .col6
      img
        width: 70px
        margin: 20px 60px
      span
        color: $orange
        font-weight: bold
        font-size: 1.2em
  form
    width: 100%
    padding: 20px
    p
      label, input, textarea
        display: block
        width: 100%
        margin-bottom: 10px
      input, textarea
        background: #f5ffff
        border: none
        border-bottom: 1px solid $orange
        padding-left: 10px
        font-size: 22px
        font-family: 'Montserrat', sans-serif
        @include transition
      input
        height: 25px
        &:focus
          height: 35px
      textarea
        resize: none
        height: 150px
        &:focus
          height: 165px
    button
      display: block
      margin: 30px auto
    small
      display: block
      text-align: right

</style>
