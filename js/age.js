const date = 1259098620
setInterval(() => {
    const now = Math.round(Date.now() / 1000)
    const age = (now - date) / 3600 / 24 / 365
    document.getElementById('age').innerHTML = age.toFixed(7)
  }, 2000)