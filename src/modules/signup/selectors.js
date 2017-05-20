import { createSelector } from 'reselect'
import { moduleName } from './index'

const signup = state => state.get(moduleName)

export const getFormData = createSelector(signup, state => state.form)

export const getErrors = createSelector(signup, state =>
  state.errors
    .entrySeq()
    .toArray()
    .filter(x => x[1].length)
    .map(([field, error]) => ({ field, error })),
)
