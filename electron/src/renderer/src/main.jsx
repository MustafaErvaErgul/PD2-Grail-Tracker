import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Notification from "./components/Notification/Notification"

const renderComponent = () => {
  const rootElement = document.getElementById('root')
  const root = ReactDOM.createRoot(rootElement)

  if (window.location.hash === '#notification') {
    root.render(
      <Notification />
    )
  } else {
    root.render(
      <App />
    )
  }
}

renderComponent()
