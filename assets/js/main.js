import simpleParallax from 'simple-parallax-js'

window.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelectorAll('.js-parallax')

  new simpleParallax(image, {
    scale: 1.8
  })
})