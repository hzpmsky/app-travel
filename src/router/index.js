import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import Detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home1',
            component: Home
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
          path: '/city',
          name: 'City',
          component: City
      },
      {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    }
    ]
})
