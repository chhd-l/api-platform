import React from 'react'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import reportWebVitals from './reportWebVitals'
import { createRoot } from 'react-dom/client'
import en_US from 'antd/lib/locale/en_US'

const container = document.getElementById('root')
const root = createRoot(container!)
// ConfigProvider.config({
//   theme: '#6CA100',
//   prefixCls: 'ant', // 4.13.0+
// })
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={en_US}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
