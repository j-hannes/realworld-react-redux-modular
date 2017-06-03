import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as auth from 'modules/auth'

import Navbar from './navbar'
import Footer from './footer'
import Home from './home'

const { SignupForm, LoginForm } = auth.components

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/register" component={SignupForm} />
      <Route path="/login" component={LoginForm} />
      <Footer />
    </div>
  </Router>
)

export default App
