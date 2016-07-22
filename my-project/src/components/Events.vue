<template lang="html">
  events: {{events.data}}
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
      this.events = response
      // this.events = 'success'
    }, (response) => {
      this.events = 'failure'
      // error callback
    })
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
