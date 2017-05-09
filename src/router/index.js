import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Projects from '@/components/projects/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
