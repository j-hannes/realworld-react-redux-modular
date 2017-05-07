import { combineReducers } from 'redux-immutable'

import * as articles from 'modules/articles'

export default combineReducers({
  [articles.moduleName]: articles.reducer,
})
