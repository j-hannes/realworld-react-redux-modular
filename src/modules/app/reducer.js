import { combineReducers } from 'redux'

import * as articles from 'modules/articles'

export default combineReducers({
  [articles.moduleName]: articles.reducer,
})
