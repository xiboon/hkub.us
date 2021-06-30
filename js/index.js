const date = 1259098620
let last
let themea = true

setInterval(() => {
  const now = Math.round(Date.now() / 1000)
  const age = (now - date) / 3600 / 24 / 365
  document.getElementById('age').innerHTML = age.toFixed(7)
}, 2000)
if (localStorage.theme) theme()
function clicked() {
  let check = easteregg()
  if (check) return
  themea = !themea
  theme()
  localStorage.theme = themea
}
