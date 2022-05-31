import routers from './router'
import { useRoutes } from 'react-router-dom'

import './App.less'
import Home from './views/Home'
import { ConfigProvider } from 'antd'

// ConfigProvider.config({
//   theme: '#6CA100',
// })
function App() {
  const routes = useRoutes(routers)
  return (
    // <ConfigProvider >
    <div className="App">
      <section>{routes}</section>
    </div>
    //  </ConfigProvider>
  )
}

export default App
