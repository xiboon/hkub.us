let theme = true;
function changeTheme() {
  theme = !theme;
  if (!theme) {
    document.getElementById('main').className = 'main-light';
    document.getElementById('description').className = 'text-light';
    document.getElementById('nick').className = 'text-light';
    document.getElementById('btn').className = 'button-light';
    document.getElementById('btn').innerHTML = 'dark_mode';
  } else {
    document.getElementById('main').className = 'main';
    document.getElementById('description').className = 'text';
    document.getElementById('nick').className = 'text';
    document.getElementById('btn').className = 'button';
    document.getElementById('btn').innerHTML = 'light_mode';
  }
}
