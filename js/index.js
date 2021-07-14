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
