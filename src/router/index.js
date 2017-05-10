import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MainPage from '@/components/main-page/MainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainPage
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
