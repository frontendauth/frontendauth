<template lang="html">
<div v-for="event in events">
  <h2><a href="{{event.link}}">{{event.name}}</a></h2>
  <p>
    When: {{ new Date(event.time) }}
  </p>
  <p>
    Description: {{{ event.description }}}
  </p>
  <p>
    <a href="{{event.link}}">RSVP Now!</a>
  </p>
  <hr>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      events: 'events here'
    }
  },
  computed: {},
  ready: function () {
    this.$http.get('https://api.meetup.com/frontendauthority/events?&sign=true&photo-host=public&page=20').then((response) => {
      // success callback
      this.events = response.data
    }, (response) => {
      // error callback
      this.events = 'failure'
    })
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>