import routers from './router'
import { useRoutes } from 'react-router-dom'

import './App.less'

function App() {
  const routes = useRoutes(routers)
  return (
    <div className="App">
      <section>{routes}</section>
    </div>
  )
}

export default App
