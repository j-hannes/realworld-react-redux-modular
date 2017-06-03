import { fork } from 'redux-saga/effects'

import * as articles from 'modules/articles'
import * as auth from 'modules/auth'

export default function* mainSaga() {
  yield fork(articles.sagas.mainSaga)
  yield fork(auth.sagas.mainSaga)
}
