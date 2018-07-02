import '../css/style.scss'

if (typeof window.fetch !== 'function') {
  import('whatwg-fetch')
}

function main() {
  playVideo()
  initiateScrolling()

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

function playVideo() {
  document.addEventListener('click', (event) => {
    const target = event.target

    if (target.name === 'play') {
      const video = target.parentNode.querySelector('video')
      const showButton = (event) => {
        video.removeEventListener(event.type, showButton)
        target.parentNode.classList.remove('hide')
        video.pause()
      }

      target.parentNode.classList.add('hide')
      video.play()
      video.addEventListener('pause', showButton)
      video.addEventListener('click', showButton)
    }
  })
}

function initiateScrolling() {
  const button = document.getElementById('scroll-btn')

  button.addEventListener('click', (event) => {
    event.preventDefault()

    const selector = button.getAttribute('href')
    const target = document.querySelector(selector)
    const { top } = target.getBoundingClientRect()
    let currentTop = window.pageYOffset
    const step = (top - currentTop) / 50
    const animate = () => {
      currentTop += step
      window.scrollTo(0, currentTop)

      if (currentTop < top) {
        requestAnimationFrame(animate)
      } else {
        location.hash = selector
      }
    }

    animate()
  })
}

main()

