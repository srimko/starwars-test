import simpleParallax from 'simple-parallax-js'

window.addEventListener('DOMContentLoaded', () => {

  // Burger menu
  const menuBurger = document.querySelector('.js-menuBurger')
  const closeBtn = document.querySelector('.js-close')
  const sideNav = document.querySelector('.sidenav')

  menuBurger.addEventListener('click', event => {
    if (sideNav) {
      sideNav.classList.add('active')
    }
  })
  closeBtn.addEventListener('click', event => {
    if (sideNav) {
      sideNav.classList.remove('active')
    }
  })

  // Parallax
  const images = document.querySelectorAll('.js-parallax')

  if (images.length > 0) {
    images.forEach(image => {
      let scale = 1.8
      console.log(image)
      if (image.dataset.scale) {
        scale = image.dataset.scale
      }
      new simpleParallax(image, {
        scale
      })
    })
  }
})