import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/poem',
      name: 'poem-page',
      component: require('@/components/poem/poem').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
