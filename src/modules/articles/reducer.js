import { List, Record } from 'immutable'

const Author = Record(
  {
    image: '',
    username: '',
  },
  'Author',
)

const Article = Record(
  {
    title: '',
    slug: '',
    description: '',
    author: Author(),
    createdAt: '',
    favoritesCount: 0,
  },
  'Article',
)

export const generateArticle = jsonData =>
  Article({
    ...jsonData,
    author: Author(jsonData.author),
  })

const initialState = new List()

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_SUCCESS':
      return new List(action.payload.articles.map(generateArticle))
    default:
      return state
  }
}
