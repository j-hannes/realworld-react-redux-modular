import { Record } from 'immutable'

const SignupForm = Record({
  username: '',
  email: '',
  password: '',
})

const SignupErrors = Record({
  username: [],
  email: [],
  password: [],
})

const SignupState = Record({
  form: SignupForm(),
  errors: SignupErrors(),
})

const initialState = SignupState()

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_FIELD':
      return state.setIn(['form', action.field], action.value)
    case 'SIGNUP_ERROR':
      return state.set('errors', SignupErrors(action.payload.errors))
    case 'SIGNUP_SUCCESS':
      return state.set('errors', SignupErrors())
    default:
      return state
  }
}
