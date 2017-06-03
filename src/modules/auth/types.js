import { recordOf as record } from 'react-immutable-proptypes'
import { string, array, arrayOf, shape } from 'prop-types'

export const formData = record({
  username: string.isRequired,
  email: string.isRequired,
  password: string.isRequired,
})

export const formErrors = arrayOf(shape({
  field: string.isRequired,
  error: array.isRequired,
}))
