import React from 'react'

import * as types from '../types'
import { formatDate } from '../utils/datetime'

const ArticlePreview = ({ article }) => (
  <div>
    <div className="article-preview">
      <div className="article-meta">
        <a href="">
          <img src={article.author.image} alt="avatar" />
        </a>
        <div className="info">
          <a href="" className="author">{article.author.username}</a>
          <span className="date">{formatDate(article.createdAt)}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart" /> {article.favoritesCount}
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </a>
    </div>
  </div>
)

ArticlePreview.propTypes = {
  article: types.Article.isRequired,
}

export default ArticlePreview
