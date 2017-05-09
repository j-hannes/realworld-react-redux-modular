import { listOf as list, recordOf as record } from 'react-immutable-proptypes'
import { string, number } from 'prop-types'

export const author = record({
  image: string.isRequired,
  username: string.isRequired,
})

export const article = record({
  title: string.isRequired,
  description: string,
  author: author.isRequired,
  createdAt: string.isRequired,
  favoritesCount: number.isRequired,
})

export const articles = list(article)
