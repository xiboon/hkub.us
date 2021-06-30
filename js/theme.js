let theme = true;
function changeTheme() {
  theme = !theme;
  let btn = document.getElementsByClassName('btn');
  if (!theme) {
    document.getElementById('main').className = 'main-light';
    document.getElementById('description').className = 'text-light';
    document.getElementById('nick').className = 'text-light';
    btn.className = 'button-light';
    btn.innerHTML = 'dark_mode';
  } else {
    document.getElementById('main').className = 'main';
    document.getElementById('description').className = 'text';
    document.getElementById('nick').className = 'text';
    btn.className = 'button';
    btn.innerHTML = 'light_mode';
  }
}
