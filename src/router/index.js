import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from '../views/Detail.vue'
import Create from '../views/Create.vue'
import Tags from '../views/Tags.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path:'/detail/:id',
    name:'Detail',
    component: Detail,
    props:true
  },
  {
    path:'/tags/:tag',
    name:'tags',
    component: Tags,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
