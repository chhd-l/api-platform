import { RouteObject } from 'react-router-dom'
import Layout from '../components/common/Layout'

import Home from '../views/Home'
import Detail from '../views/Detail'
import { Search } from '../views/Search'
import { Apis } from '../views/Apis'
import { ApiDetail } from '../views/Apis/Detail'
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
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/apis',
        element: <Apis />,
      },
      {
        path: '/apis/api-details',
        element: <ApiDetail />,
      },
    ],
  },
]

export default routers
