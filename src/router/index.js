import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/main-page/MainPage'
import Projects from '@/components/projects/Projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/projects',
      component: Projects
    }
  ]
})
