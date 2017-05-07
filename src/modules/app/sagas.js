import { fork } from 'redux-saga/effects'

import * as articles from 'modules/articles'

export default function* mainSaga() {
  yield fork(articles.sagas.mainSaga)
}
