import React, { lazy } from 'react';
import Layout from '../components/common/Layout';

import Home from '../views/Home';
import Detail from '../views/Detail';

interface RouteObject {
  caseSensitive?: boolean
  children?: RouteObject[]
  element?: React.ReactNode
  index?: boolean
  path?: string
  breadcrumbName?: string
  Navigate?: string
}

const routers: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, element: <Home />
      },
      {
        path: '/detail', element: <Detail />
      }
    ]
  }
];

export default routers;
