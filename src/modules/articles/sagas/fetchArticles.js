import { call, put, takeLatest } from 'redux-saga/effects'

import Api from '../api'

export function* watchFetchArticles() {
  yield takeLatest('FETCH_ARTICLES', fetchArticles)
}

export function* fetchArticles() {
  const { result, error } = yield call(Api.fetchArticles)
  if (result) {
    yield put({ type: 'FETCH_ARTICLES_SUCCESS', payload: result })
  } else {
    yield put({ type: 'FETCH_ARTICLES_ERROR', error })
  }
}
