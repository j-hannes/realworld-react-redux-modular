import { fork, put } from 'redux-saga/effects'
import { watchFetchArticles } from './sagas/fetchArticles'

export default function*() {
  yield fork(watchFetchArticles)
  yield put({ type: 'FETCH_ARTICLES' })
}
