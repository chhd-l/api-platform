import { RouteObject } from 'react-router-dom'
import Layout from '../components/common/Layout'

import Home from '../views/Home'
import Detail from '../views/Detail'
import { Search } from '../views/Search'
import { Apis } from '../views/Apis'
import Applications from '../views/Applications'
import ApplicationsDetails from '../views/Applications/components/ApplicationsDetails'

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
        path: 'applications',
        children: [
          {
            index: true,
            element: <Applications />,
          },
          {
            path: 'applicationsDetails',
            element: <ApplicationsDetails />,
          },
        ]
      },
      {
        path: '/api-details',
        element: <Apis />,
      }
    ],
  },
]

export default routers
