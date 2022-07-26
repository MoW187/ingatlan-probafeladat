import { createRouter, createWebHistory } from 'vue-router'
import List from "@/views/List";
import Details from "@/views/Details";

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/reszletek/:id',
    name: 'Details',
    component: Details
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
