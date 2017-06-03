import { call, fork, put, select, take } from 'redux-saga/effects'

import api from 'api'

import { getFormData } from './selectors'
import * as proxy from './proxy'

export default function*() {
  yield fork(signup)
  yield fork(authentication)
}

function* signup() {
  while (true) {
    yield take('SIGNUP_REQUEST')
    const formData = yield select(getFormData)
    const { errors, user } = yield call(api.signup, formData.toJS())
    if (user) {
      yield call(proxy.storeToken, user.token)
      yield put({ type: 'SIGNUP_SUCCESS', payload: { user } })
    } else if (errors) {
      yield put({ type: 'SIGNUP_ERROR', payload: { errors } })
    } else {
      throw Error('API must return user or errors')
    }
  }
}

function* authentication() {
  while (true) {
    let authorized = false
    while (!authorized) {
      yield take('LOGIN_REQUEST')
      const formData = yield select(getFormData)
      const { email, password } = formData.toJS()
      const { user, errors } = yield call(api.login, email, password)
      if (user) {
        yield call(proxy.storeToken, user.token)
        yield put({ type: 'LOGIN_SUCCESS', payload: { user } })
        authorized = true
      } else if (errors) {
        yield put({ type: 'LOGIN_ERROR', payload: { errors } })
      } else {
        throw Error('API must return user or errors')
      }
    }
    take('LOGOUT')
  }
}
