import { call, put, select, takeLatest } from 'redux-saga/effects'

import api from 'api'
import { getFormData } from '../selectors'

export function* watchRequestSignup() {
  yield takeLatest('SIGNUP_REQUEST', requestSignup)
}

export function* requestSignup() {
  const formData = yield select(getFormData)
  const { errors, user } = yield call(api.requestSignup, formData.toJS())
  if (user) {
    yield put({ type: 'SIGNUP_SUCCESS', payload: { user } })
  } else if (errors) {
    yield put({ type: 'SIGNUP_ERROR', payload: { errors } })
  } else {
    throw Error('API must return user or errors')
  }
}
