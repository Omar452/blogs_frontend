import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ShowBlog from '../components/ShowBlog.vue'
import CreateBlog from '../views/CreateBlog.vue'
import EditBlog from '../views/EditBlog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs/:id',
    name: 'ShowBlog',
    component: ShowBlog,
    props: true
  },
  {
    path: '/blogs/create',
    name: 'CreateBlog',
    component: CreateBlog,
  },
  {
    path: '/blogs/edit/:id',
    name: 'EditBlog',
    component: EditBlog,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
