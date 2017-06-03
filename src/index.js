import React from 'react'
import ReactDOM from 'react-dom'
import * as app from 'modules/app'
import { log } from 'utils/logging'

const { Root } = app.containers

window.log = log

ReactDOM.render(<Root />, document.getElementById('root'))

