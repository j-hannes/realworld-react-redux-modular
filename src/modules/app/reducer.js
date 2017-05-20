import { combineReducers } from 'redux-immutable'

import * as articles from 'modules/articles'
import * as signup from 'modules/signup'

export default combineReducers({
  [articles.moduleName]: articles.reducer,
  [signup.moduleName]: signup.reducer,
})
