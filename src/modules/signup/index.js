import Signup from './components/signup'

import mainSaga from './sagas'

export const moduleName = 'signup'

export { default as reducer } from './reducer'

export const sagas = {
  mainSaga,
}

export const components = {
  Signup,
}
