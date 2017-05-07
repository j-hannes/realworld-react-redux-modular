import React from 'react'
import { Provider } from 'react-redux'

import { configureStore } from '../store'
import App from '../components/app'

const Root = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
)

export default Root
