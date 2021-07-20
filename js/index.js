function parseBool(val) {
  return val === "true";
}

let themea = parseBool(localStorage.theme) ?? true;

if (!themea) theme();
function clicked() {
  localStorage.setItem("theme", !parseBool(localStorage.theme));
  theme();
}
