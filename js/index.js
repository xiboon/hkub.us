const date = 1259098620;
let theme = true;
let last;

function roundUp(num, precision) {
  precision = Math.pow(10, precision);
  return Math.ceil(num * precision) / precision;
}

setInterval(() => {
  const now = Math.round(Date.now() / 1000);
  const age = (now - date) / 3600 / 24 / 365;
  document.getElementById('age').innerHTML = roundUp(age, 7);
}, 2000);

// themes

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
