const date = 1259098620;
let theme = true;
console.log(Date.now() / 1000);
let last;

function roundUp(num, precision) {
  precision = Math.pow(10, precision);
  return Math.ceil(num * precision) / precision;
}

setInterval(() => {
  const now = Math.round(Date.now() / 1000).toString();
  const age = (parseInt(now) - date) / 3600 / 24 / 365;
  console.log((now - date) / 3600 / 24 / 365);
  console.log(roundUp(age, 0.1));
  document.getElementById('age').innerHTML = roundUp(age, 7);
}, 1000);

// themes

function changeTheme() {
  theme = !theme;
  if (!theme) {
    document.getElementById('main').className = 'main-light';
    document.getElementById('description').className = 'text-light';
    document.getElementById('nick').className = 'text-light';
    document.getElementById('btn').className = 'button-light';
  } else {
    document.getElementById('main').className = 'main';
    document.getElementById('description').className = 'text';
    document.getElementById('nick').className = 'text';
    document.getElementById('btn').className = 'button';
  }
}
