import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { func } from 'prop-types'

import * as types from '../types'
import { getFormData, getErrors } from '../selectors'

const Signup = props => (
  <div className="auth-page">
    <div className="container page">
      <div className="row">

        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign up</h1>
          <p className="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul className="error-messages">
            {props.errors.map(({ field, error }) => (
              <li key={field}>{field} {error}</li>
            ))}
          </ul>

          <form onSubmit={props.requestSignup}>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                value={props.form.username}
                onChange={props.changeFormField}
                name="username"
              />
            </fieldset>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Email"
                value={props.form.email}
                onChange={props.changeFormField}
                name="email"
              />
            </fieldset>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
                value={props.form.password}
                onChange={props.changeFormField}
                name="password"
              />
            </fieldset>
            <button className="btn btn-lg btn-primary pull-xs-right">
              Sign up
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
)

Signup.propTypes = {
  form: types.signupForm.isRequired,
  errors: types.signupErrors.isRequired,
  changeFormField: func.isRequired,
  requestSignup: func.isRequired,
}

export default connect(
  createStructuredSelector({
    form: getFormData,
    errors: getErrors,
  }),
  dispatch => ({
    changeFormField(e) {
      dispatch({
        type: 'UPDATE_FORM_FIELD',
        field: e.target.name,
        value: e.target.value,
      })
    },
    requestSignup(e) {
      e.preventDefault()
      dispatch({ type: 'SIGNUP_REQUEST' })
    },
  }),
)(Signup)
