<template>
  <div id="app">
    <FEAHeader></FEAHeader>
    <router-view></router-view>
    <FEAFooter></FEAFooter>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export default {
  name: 'app',
  components: {
    'FEAHeader': Header,
    'FEAFooter': Footer
  }
}
</script>

<style>
</style>
