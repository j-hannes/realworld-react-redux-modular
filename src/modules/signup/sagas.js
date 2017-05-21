import { call, fork, put, select, take } from 'redux-saga/effects'
import api from 'api'
import { getFormData } from './selectors'
import * as auth from './auth'

export default function*() {
  yield fork(signup)
}

function* signup() {
  while (true) {
    yield take('SIGNUP_REQUEST')
    const formData = yield select(getFormData)
    const { errors, user } = yield call(api.requestSignup, formData.toJS())
    if (user) {
      yield call(auth.storeToken, user.token)
      yield put({ type: 'SIGNUP_SUCCESS', payload: { user } })
    } else if (errors) {
      yield put({ type: 'SIGNUP_ERROR', payload: { errors } })
    } else {
      throw Error('API must return user or errors')
    }
  }
}
