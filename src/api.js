import axios from 'axios'

const localBackend = true

axios.defaults.baseURL = localBackend
  ? 'http://localhost:3001'
  : 'https://conduit.productionready.io'

export default {
  fetchArticles: () =>
    axios
      .get('/api/articles')
      .then(response => response.data)
      .catch(error => error),

  signup: formData =>
    axios
      .post('/api/users', { user: formData })
      .then(response => response.data)
      .catch(error => error.response.data),

  login: (email, password) =>
    axios
      .post('/api/users/login', { user: { email, password } })
      .then(response => response.data)
      .catch(error => error.response.data),
}
