import Articles from './containers/articles'

import mainSaga from './sagas'

export const moduleName = 'articles'

export { default as reducer } from './reducer'

export const sagas = {
  mainSaga,
}

export const containers = {
  Articles,
}
