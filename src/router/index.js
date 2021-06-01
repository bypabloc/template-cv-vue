import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})