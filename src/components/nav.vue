<template>
  <div>
    <li v-for="(item, index) in navbar" :key="index">
      <router-link :to="item.link">{{ item.name }}</router-link>
    </li>
  </div>  
</template>

<script>
export default {
  data () {
    return {
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
  }
}
</script>

<style lang="sass">
</style>
