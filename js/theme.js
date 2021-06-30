function theme() {
  body = document.querySelector('body')
  dot = document.querySelector('.theme-dot')
  navbar = document.querySelector('.navbar')
  icons = document.getElementsByClassName('navbaricon')
  ;[...icons].forEach(function (div) {
    div.classList.toggle('darkicon')
  })
  body.classList.toggle('dark')
  navbar.classList.toggle('navdark')
  dot.classList.toggle('dark')
}
