const openMenu = ({ menu, closeBtn, menuBurger, body }) => {
  menu.classList.add('active')
  menuBurger.classList.add('hide')
  closeBtn.classList.remove('hide')
  body.style.overflowY = 'hidden'
}

const closeMenu = ({ menu, closeBtn, menuBurger, body }) => {
  menu.classList.remove('active')
  closeBtn.classList.add('hide')
  menuBurger.classList.remove('hide')
  body.style.overflowY = null
}
export {
  openMenu,
  closeMenu
}