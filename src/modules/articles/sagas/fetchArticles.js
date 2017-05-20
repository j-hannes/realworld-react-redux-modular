import { call, put, takeLatest } from 'redux-saga/effects'

import api from 'api'

export function* watchFetchArticles() {
  yield takeLatest('FETCH_ARTICLES', fetchArticles)
}

export function* fetchArticles() {
  const { articles, message } = yield call(api.fetchArticles)
  if (articles) {
    yield put({ type: 'FETCH_ARTICLES_SUCCESS', payload: { articles } })
  } else if (message) {
    yield put({ type: 'FETCH_ARTICLES_ERROR', payload: { message } })
  } else {
    throw Error('API must return articles or mesage')
  }
}
