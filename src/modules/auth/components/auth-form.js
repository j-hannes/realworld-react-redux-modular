import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { bool, func } from 'prop-types'

import * as types from '../types'
import { getFormData, getFormErrors } from '../selectors'

const AuthForm = props => (
  <div className="auth-page">
    <div className="container page">
      <div className="row">

        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">
            {props.login ? 'Log in' : 'Sign up'}
          </h1>
          <p className="text-xs-center">
            <Link to={props.login ? '/register' : '/login'}>
              {props.login ? 'Need' : 'Have'} an account?
            </Link>
          </p>

          <ul className="error-messages">
            {props.formErrors.map(({ field, error }) => (
              <li key={field}>{field} {error}</li>
            ))}
          </ul>

          <form onSubmit={props.authenticateUser}>
            {!props.login &&
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  value={props.formData.username}
                  onChange={props.changeFormField}
                  name="username"
                />
              </fieldset>}
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Email"
                value={props.formData.email}
                onChange={props.changeFormField}
                name="email"
              />
            </fieldset>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
                value={props.formData.password}
                onChange={props.changeFormField}
                name="password"
              />
            </fieldset>
            <button className="btn btn-lg btn-primary pull-xs-right">
              Sign in
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
)

AuthForm.propTypes = {
  formData: types.formData.isRequired,
  formErrors: types.formErrors.isRequired,
  changeFormField: func.isRequired,
  authenticateUser: func.isRequired,
  login: bool,
}

AuthForm.defaultProps = {
  login: false,
}

export default connect(
  createStructuredSelector({
    formData: getFormData,
    formErrors: getFormErrors,
  }),
  (dispatch, props) => ({
    changeFormField(e) {
      dispatch({
        type: 'UPDATE_FORM_FIELD',
        field: e.target.name,
        value: e.target.value,
      })
    },
    authenticateUser(e) {
      e.preventDefault()
      if (props.login) {
        dispatch({ type: 'LOGIN_REQUEST' })
      } else {
        dispatch({ type: 'SIGNUP_REQUEST' })
      }
    },
  }),
)(AuthForm)
