import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../Wrapper'

const Layout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Layout
