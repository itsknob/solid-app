import * as React from 'react'
import ReactDOM from 'react-dom'
import { SessionProvider } from '@inrupt/solid-ui-react'

import 'normalize.css'

import App from './App'

ReactDOM.render(
  <SessionProvider sessionId={'session'}>
    <App />
  </SessionProvider>,
  document.getElementById('root')
)
