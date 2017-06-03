import { combineReducers } from 'redux-immutable'

import * as articles from 'modules/articles'
import * as auth from 'modules/auth'

export default combineReducers({
  [articles.moduleName]: articles.reducer,
  [auth.moduleName]: auth.reducer,
})
