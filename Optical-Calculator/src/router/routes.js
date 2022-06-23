import Addition from "pages/Addition";
import Diameter from "pages/Diameter";
import EdgeThickness from "pages/EdgeThickness";
import Near from "pages/Near";
import Transposition from "pages/Transposition";
import MainLayout from "layouts/MainLayout";
import IndexPage from "pages/IndexPage";

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '',
        component: IndexPage
      },
      {
        path: '/calculation/addition',
        name: 'addition',
        component: Addition
      },
      {
        path: '/calculation/diameter',
        name: 'diameter',
        component: Diameter
      },
      {
        path: '/calculation/edge-thickness',
        name: 'edge-thickness',
        component: EdgeThickness
      },
      {
        path: '/calculation/near',
        name: 'near',
        component: Near
      },
      {
        path: '/calculation/transposition',
        name: 'transposition',
        component: Transposition
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
