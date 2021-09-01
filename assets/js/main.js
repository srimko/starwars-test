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
  const image = document.querySelectorAll('.js-parallax')

  if (image) {
    new simpleParallax(image, {
      scale: 1.8
    })
  }
})