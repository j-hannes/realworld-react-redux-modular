import React from 'react'

import * as articles from 'modules/articles'

const { Articles } = articles.containers

const Home = () => (
  <div className="home-page">
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <Articles />
        </div>
      </div>
    </div>
  </div>
)

export default Home
