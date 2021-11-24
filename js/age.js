const date = 1259098620;
const now = Math.round(Date.now() / 1000);
const age = (now - date) / 3600 / 24 / 365;
document.getElementById("age").innerHTML = age.toFixed(3);
