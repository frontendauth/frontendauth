<template>
  <div>
    <p>Our Next Events!</p>

    <div v-for="event in events">
        Title: {{event.name}} <br/>
        Date: {{new Date(event.time)}} <br/>
        RSVP Count: {{event.yes_rsvp_count}}
    </div>

  </div>
</template>

<script>

import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  data () {
    return {
      events: 'hello'
    }
  },
  methods: {
    getEvents () {
      console.log('duh')
      this.$http.get('api/getEvents').then((response) => {
      // success callback
        this.events = response.body
      }, (response) => {
      // error callback
//      this.events = 'failure'
      })
    }
  },
  mounted () {
    console.log('hello')
    this.getEvents()
  }
}
</script>

<style scoped>
</style>
