// import {useRoutes} from 'react-router-dom'
import Home from '../view/Home'
import Layout from '../view/Layout'

const routes = [
  {
    path: '/',
    key: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        key: '/',
        element: <Home />,
      }
    ]
  }
]

export default routes