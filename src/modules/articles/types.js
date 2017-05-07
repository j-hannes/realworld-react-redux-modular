import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'

export const Article = ImmutablePropTypes.recordOf({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: ImmutablePropTypes.recordOf({
    image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  favoritesCount: PropTypes.number.isRequired,
})

export const Articles = ImmutablePropTypes.listOf(Article)
