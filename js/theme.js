function theme() {
  body = document.querySelector('body')
  dot = document.querySelector('.theme-dot')
  navbar = document.querySelector('.navbar')
  gh = document.querySelector('.gh')
  icons = document.getElementsByClassName('navbaricon')
  ;[...icons].forEach(function (div) {
    div.classList.toggle('darkicon')
  })
  body.classList.toggle('dark')
  navbar.classList.toggle('navdark')
  gh.classList.toggle('darktext')
  dot.classList.toggle('dark')
}
