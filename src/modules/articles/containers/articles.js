import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import * as types from '../types'

import { articles } from '../selectors'
import ArticlePreview from '../components/article-preview'

const Articles = props => (
  <div>
    {props.articles.map(article => (
      <ArticlePreview key={article.slug} article={article} />
    ))}
  </div>
)

Articles.propTypes = {
  articles: types.Articles.isRequired,
}

const mapStateToProps = createStructuredSelector({
  articles,
})

export default connect(mapStateToProps)(Articles)
