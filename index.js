const body = document.body
const header = document.querySelector('.header')
const burger = header.querySelector('.header__burger')

const openMenu = (evt) => {
  if(evt.target.classList.contains('header__burger')) {
    header.classList.toggle('open-menu')
    burger.classList.toggle('burger--active')
    body.classList.toggle('scroll-lock')
  }
}

header.addEventListener('click', openMenu)