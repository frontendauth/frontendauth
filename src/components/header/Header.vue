<template>
    <div>
        <div class="hero"
            v-if="isHomePage">
            <div class="row text-center">
                <div class="small-12 columns"><img :src="'/static/img/frontendauth-logo.png'" alt="FRONT END AUTHORITY" class="headline"></div>
            </div>
        </div>
        <div v-else>
            <h1>Front End Authority</h1>
        </div>
    <ul class="menu">
        <router-link to="/">Main Page</router-link>
        <router-link to="/projects">Projects</router-link>
    </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    isHomePage () {
      return this.$route.fullPath === '/'
    }
  }
}
</script>
