function z() {
  fetch("https://discord.com/api/webhooks/993113270447779850/02aHA0ZTgqnm7AzdPWKJ0bO9Fg5dQ1C70A4ZJSoM9MOaGx2hFbEA4NP37rr1dANMyGkk", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify({
      username: $('#nameZ').val()||'Anonymous',
      content: $('#contZ').val()
    })
  })
  $('#contZ').val('')
}
function s() {
  fetch("https://discord.com/api/webhooks/993140459696295937/sTn9xUOsINSG60N1QghB3jJm3s-2AmU43P-tPjHB4NVc_XERcrEq2K_PdIzftdTjfuj8", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify({
      username: $('#nameS').val()||"Anonymous",
      content: $('#contS').val()
    })
  })
  $('#contS').val('')
}
