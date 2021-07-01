const date = 1259098620
let last

setInterval(() => {
  const now = Math.round(Date.now() / 1000)
  const age = (now - date) / 3600 / 24 / 365
  document.getElementById('age').innerHTML = age.toFixed(7)
}, 2000)
function parseBool(val) {
  return val === 'true'
}

let themea = parseBool(localStorage.theme) ?? true

if (!themea) theme()
function clicked() {
  let check = easteregg()
  if (check) return
  localStorage.setItem('theme', !parseBool(localStorage.theme))
  theme()
}
