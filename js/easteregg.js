let troll = 0
let zerykowane = false
function easteregg() {
  troll++
  if (troll === 5) return true
  else return false
  console.log(trolled)
}
setInterval(() => {
  if (zerykowane) return
  if (troll === 5) {
    console.log('trolled')
    body = document.querySelector('body')
    dot = document.querySelector('.theme-dot')
    navbar = document.querySelector('.navbar')
    text = document.querySelector('h1')
    icons = document.getElementsByClassName('navbaricon')
    ;[...icons].forEach(function (div) {
      div.classList.toggle('eric')
    })
    body.classList.toggle('eric')
    text.innerHTML = 'Eric Siu enjoyer'
    navbar.classList.toggle('ericnav')
    dot.classList.toggle('eric')
    zerykowane = true
  }
}, 500)
setInterval(() => {
  troll = 0
}, 3000)
