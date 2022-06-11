import Home from "pages/Home";
import Addition from "pages/Addition";
import Diameter from "pages/Diameter";
import EdgeThickness from "pages/EdgeThickness";
import Near from "pages/Near";
import Transposition from "pages/Transposition";

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/addition',
    name: 'addition',
    component: Addition
  },
  {
    path: '/diameter',
    name: 'diameter',
    component: Diameter
  },
  {
    path: '/edge-thickness',
    name: 'edge-thickness',
    component: EdgeThickness
  },
  {
    path: '/near',
    name: 'near',
    component: Near
  },
  {
    path: '/transposition',
    name: 'transposition',
    component: Transposition
  }
]

/*const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})*/

export default routes
