import { fork, put } from 'redux-saga/effects'
import { watchRequestSignup } from './sagas/requestSignup'

export default function*() {
  yield fork(watchRequestSignup)
  yield put({ type: 'FETCH_ARTICLES' })
}
