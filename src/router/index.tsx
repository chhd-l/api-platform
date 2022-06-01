import { RouteObject } from 'react-router-dom'
import Layout from '../components/common/Layout'

import Home from '../views/Home'
import Detail from '../views/Detail'

const routers: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/detail',
        element: <Detail />,
      },
    ],
  },
]

export default routers
