import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as signup from 'modules/signup'

import Navbar from './navbar'
import Footer from './footer'
import Home from './home'

const { Signup } = signup.components

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Footer />
    </div>
  </Router>
)

export default App
