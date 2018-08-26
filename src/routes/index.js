import Home from '../pages/home.js'
import About from '../pages/about.js'

export default {
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'about',
      path: '/about',
      component: About
    }
  ],
  redirect: '/home'
}
