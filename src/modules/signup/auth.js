/* eslint-disable no-console */

export function storeToken(token) {
  try {
    localStorage.setItem('authToken', JSON.stringify(token))
  } catch (e) {
    console.warn('could not store token')
    console.warn(e)
  }
}

export function deleteToken() {
  localStorage.removeItem('authToken')
}

export function getToken() {
  try {
    return JSON.parse(localStorage.getItem('authToken'))
  } catch (e) {
    console.warn('could not parse token')
    console.warn(e)
    return ''
  }
}
