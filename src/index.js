import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import './index.css'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </HashRouter>,
  document.getElementById('root')
)
