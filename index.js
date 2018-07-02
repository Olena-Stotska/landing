import './css/style.scss'
import 'whatwg-fetch'

function main() {
  return getArticles()
    .then(renderArticles)
    .catch(error => {
      console.error(error)
    })
}

function getArticles() {
  return fetch('db.json')
    .then(response => response.json())
}

function renderArticles(articles) {
  const template = document.getElementById('post-container')
  const main = document.getElementById('container')

  articles.forEach(article => {
    const articleNode = template.content.cloneNode(true)
    main.appendChild(render(articleNode, article))
  })
}

function render(element, obj) {
  const elements = Array.from(element.querySelectorAll('[data-bind]'))

  elements.forEach(el => {
    const bindings = el.getAttribute('data-bind').split(',')

    bindings.forEach(binding => {
      const [field, attr] = binding.split(':')

      if (attr) {
        el.setAttribute(attr, obj[field])
      } else {
        el.textContent = obj[field]
      }
    })
  })

  return element
}

main()

