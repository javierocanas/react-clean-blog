import React from 'react'
import App from './components/App'
import posts from './reducers'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { HashRouter } from 'react-router-dom'
import './styles/app.scss'

const store = createStore(posts)

render((
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById('main'));