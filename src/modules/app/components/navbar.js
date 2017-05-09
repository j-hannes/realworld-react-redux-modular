import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="navbar navbar-light">
    <div className="container">
      <Link to="/" className="navbar-brand">conduit</Link>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Sign up</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
