import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import OneWord from '@/components/OneWord'
import Question from '@/components/Question'
import Essay from '@/components/Essay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: OneWord
    },
    {
      path: '/question',
      name: 'Question',
      component: Question
    },
    {
      path: '/essay',
      name: 'Essay',
      component: Essay
    }
  ]
})
