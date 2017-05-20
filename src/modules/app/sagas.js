import { fork } from 'redux-saga/effects'

import * as articles from 'modules/articles'
import * as signup from 'modules/signup'

export default function* mainSaga() {
  yield fork(articles.sagas.mainSaga)
  yield fork(signup.sagas.mainSaga)
}
