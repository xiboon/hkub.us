const date = 1259098620;
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
