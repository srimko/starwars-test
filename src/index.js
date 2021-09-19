import './assets/styles/style.scss'
import lazyLoad from './assets/js/lazyLoad'
import { openMenu, closeMenu } from './assets/js/utils'

import simpleParallax from 'simple-parallax-js'

window.addEventListener('DOMContentLoaded', () => {

  const body = document.querySelector('body')

  // Burger menu
  const menuBurger = document.querySelector('.js-menuBurger')
  const closeBtn = document.querySelector('.js-close')
  const menu = document.querySelector('.menu')

  menuBurger.addEventListener('click', event => {
    if (menu) {
      openMenu({ menu, menuBurger, closeBtn, body })
    }
  })
  closeBtn.addEventListener('click', event => {
    if (menu) {
      closeMenu({ menu, menuBurger, closeBtn, body })
    }
  })

  if (window.matchMedia('(min-width: 600px)').matches) {
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
  }

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 600px)').matches) {
      closeMenu({ menu, menuBurger, closeBtn, body })
    }
  }, false)

  lazyLoad()
})
