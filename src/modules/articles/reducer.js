const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_SUCCESS':
      return action.payload.articles
    default:
      return state
  }
}
