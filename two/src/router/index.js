import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import One from '@/components/one'
import Two from '@/components/two'
import Three from '@/components/three'
import Four from '@/components/four'
import Five from '@/components/five'
import Details from '@/components/hell/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'One',
      component: One,
      meta: {
        title: 'one'
      }
    },
    {
      path: '/two',
      name: 'Two',
      component: Two,
      meta: {
        title: 'two'
      }
    },
    {
      path: '/three',
      name: 'Three',
      component: Three,
      meta: {
        title: 'three'
      }
    },
    {
      path: '/four',
      name: 'Four',
      component: Four,
      meta: {
        title: 'four'
      }
    },
    {
      path: '/five',
      name: 'Five',
      component: Five,
      meta: {
        title: 'five'
      }
    },
    {
      path: '/details:id?',
      name: 'Details',
      component: Details,
      meta: {
        title: 'details'
      }
    }

  ]
})
