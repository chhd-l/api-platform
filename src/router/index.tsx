import { RouteObject } from 'react-router-dom'
import Layout from '../components/common/Layout'
import { Apis } from '../views/Apis'
import { ApiDetail } from '../views/Apis/Detail'
import Applications from '../views/Applications'
import ApplicationsDetails from '../views/Applications/components/ApplicationsDetails'
import Detail from '../views/Detail'
import Home from '../views/Home'
import { Search } from '../views/Search'


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
        path: '/apis/api-details',
        element: <ApiDetail />,
      },
    ],
  },
]

export default routers
