function theme() {
  body = document.querySelector('body')
  dot = document.querySelector('.theme-dot')
  navbar = document.querySelector('.navbar')

  body.classList.toggle('dark')
  navbar.classList.toggle('dark')
  dot.classList.toggle('dark')
}
