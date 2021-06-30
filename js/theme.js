let theme = true
function changeTheme() {
  theme = !theme
  let btn = document.getElementById('btn')
  let main = document.getElementById('main')
  let dscp = document.getElementById('description')
  let nick = document.getElementById('nick')
  if (!theme) {
    main.className = 'main-light'
    dscp.className = 'text-light'
    nick.className = 'text-light'
    btn.className = 'button-light'
    btn.innerHTML = 'dark_mode'
  } else {
    main.className = 'main'
    dscp.className = 'text'
    nick.className = 'text'
    btn.className = 'button'
    btn.innerHTML = 'light_mode'
  }
}
