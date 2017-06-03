import React from 'react'
import AuthForm from './components/auth-form'

import mainSaga from './sagas'

export const moduleName = 'signup'

export { default as reducer } from './reducer'

export const sagas = {
  mainSaga,
}

export const components = {
  SignupForm: AuthForm,
  LoginForm: () => <AuthForm login />,
}
