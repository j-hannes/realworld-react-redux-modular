import { call, fork, put, take } from 'redux-saga/effects'
import api from 'api'

export default function*() {
  yield fork(loadArticles)
  yield put({ type: 'FETCH_ARTICLES' })
}

export function* loadArticles() {
  while (true) {
    yield take('FETCH_ARTICLES')
    const { articles, message } = yield call(api.fetchArticles)
    if (articles) {
      yield put({ type: 'FETCH_ARTICLES_SUCCESS', payload: { articles } })
    } else if (message) {
      yield put({ type: 'FETCH_ARTICLES_ERROR', payload: { message } })
    } else {
      throw Error('API must return articles or mesage')
    }
  }
}
