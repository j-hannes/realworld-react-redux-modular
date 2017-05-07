export default {
  fetchArticles: () =>
    fetch('https://conduit.productionready.io/api/articles')
      .then(response => response.json())
      .then(result => ({ result }))
      .catch(error => ({ error })),
}
